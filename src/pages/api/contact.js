import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "admin@web3wg.org",
      to: "amy@web3wg.org",
      subject: `You have received a new contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message:</p><p>${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email message sent." });
  } catch (error) {
    console.log("Error in sending email. Mailer Error:", error);
    res
      .status(500)
      .json({ error: "Error in sending email. Mailer Error:", error });
  }
}
