import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import path from "path";

const maxFiles = 1;
const maxFileSize = 10485760; // 10 MB in bytes

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const uploadsDir = "uploads";

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  const form = formidable({ multiples: true });

  // Parse the incoming form data
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: err,
      });
      return;
    }

    const uploadedFiles = Object.values(files)[0];

    if (uploadedFiles.length > maxFiles) {
      res.status(500).json({
        success: false,
        message: `Too many files uploaded (maximum ${maxFiles} files allowed)`,
      });
      return;
    }

    const fileNames = [];

    // Handle each uploaded file
    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];

      if (file.size > maxFileSize) {
        res.status(500).json({
          success: false,
          message: `File "${file.name}" exceeds the maximum file size of 10 MB`,
        });
        return;
      }

      const time = new Date().toISOString().replace(/[-:.]/g, "");
      const ext = path.extname(file.originalFilename);

      // Read the contents of the file
      const fileContent = await fs.promises.readFile(file.filepath);

      // Write the contents to the destination file
      await fs.promises.writeFile(
        `${uploadsDir}/${time}_${file.originalFilename}${ext}`,
        fileContent
      );

      fileNames.push(`${uploadsDir}/${time}_${file.originalFilename}${ext}`);
    }

    const { fname, lname, email, message } = fields;
    try {
      const uploadedName = fileNames[0];
      const uploadedLocation = `https://web3wg.org/uploads/${uploadedName}`;

      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: "admin@web3wg.org",
        to: "amy@web3wg.org",
        replyTo: "admin@web3wg.org",
        subject: `You have received a new submission from ${fname} ${lname}`,
        html: `<br>Name: ${fname} ${lname}<br>Email: ${email}<br>Cover letter:<br>${message}<br>Uploaded file: <a href="${uploadedLocation}">${uploadedName}</a>`,
        text: `Name: ${fname} ${lname}\nEmail: ${email}\nCover letter:\n${message}\nUploaded file: ${uploadedLocation}`,
      });

      console.log("Email message sent.");

      res.status(200).json({ message: "Email message sent." });
    } catch (error) {
      console.error(`Error in sending email. Mailer Error: ${error}`);
      res
        .status(500)
        .json({ error: `Error in sending email. Mailer Error: ${error}` });
    }
  });
}
