import { useForm } from "react-hook-form";
import { useState } from "react";
import PageLayout from "@components/PageLayout";
import Container from "@styles/pages/contact";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  async function onSubmitHandler(data) {
    const { name, email, message } = data;

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Error in sending email.");
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageLayout title={"Contact"}>
      <Container>
        {!success && (
          <div className="contact-form" id="contact">
            <form
              className="offset-xl-3 col-xl-6 offset-lg-1 col-lg-10"
              method="post"
              name="contactform"
              encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className="container">
                <h2>Contact Us</h2>
                <div className="row">
                  <div className="col-lg-6 mb-2 mt-2 col-sm-12 text-left">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter name"
                      {...register("name", {
                        required: "Please provide your name",
                      })}
                    />
                    {errors.name && (
                      <span className="error-message">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-lg-6 mb-2 mt-2 col-sm-12 text-left">
                    <label htmlFor="email">Email address</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      {...register("email", {
                        required:
                          "Please provide your email or we won't be able to contact you",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="error-message">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="col-lg-12 mb-2 mt-2 col-sm-12 text-left">
                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea
                      className="letter"
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      {...register("message", {
                        required: "Please include a message",
                      })}
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">
                        {errors.message.message}
                      </span>
                    )}
                    {error && <span className="error-message">{error}</span>}
                  </div>
                  <div className="col-lg-12 mb-2 mt-2 col-sm-12 text-center">
                    <div className="submit">
                      <button
                        type="submit"
                        className="button"
                        disabled={isLoading}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
        {success && (
          <section className="jobs-thankyou">
            <div className="thank-you">Thank you!</div>
            <h3>Thank you for your message.</h3>
          </section>
        )}
      </Container>
    </PageLayout>
  );
}
