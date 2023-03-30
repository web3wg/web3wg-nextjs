import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";
import PageLayout from "@components/PageLayout";
import Breadcrumb from "@components/Breadcrumb";
import Container from "@styles/pages/event";
import { AiFillCalendar, AiOutlineClose } from "react-icons/ai";

import logo from "../../../public/images/w3wg_lighttext_300.png";

export async function getStaticPaths() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CMS_URL + "/api/events?fields[0]=slug"
    );
    const { data: eventsSlugs } = await res.json();

    const paths = eventsSlugs.map((eventSlug) => {
      return {
        params: {
          slug: eventSlug.attributes.slug,
        },
      };
    });

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME) || 300;

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CMS_URL +
        `/api/events?populate=*&filters[slug][$eq]=${params.slug}`
    );
    const { data: events } = await res.json();

    return {
      props: {
        event: events[0],
      },
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function Event({ event = { attributes: {} } }) {
  const router = useRouter();
  const {
    title,
    description,
    startDate,
    endDate,
    extraDescription,
    location,
    primaryAnimatedText,
    secondaryAnimatedText,
    photos,
  } = event.attributes;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (modalPhoto) {
      document.body.classList.add("scroll-block");
    } else {
      document.body.classList.remove("scroll-block");
    }

    return () => {
      document.body.classList.remove("scroll-block");
    };
  }, [modalPhoto]);

  function formatEventDate() {
    const options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const isSameDay = date1.toLocaleDateString() === date2.toLocaleDateString();

    let formattedDate1 = date1.toLocaleString("en-US", options);
    let formattedDate2 = date2.toLocaleString("en-US", options);

    if (isSameDay) {
      const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
      formattedDate2 = date2.toLocaleString("en-US", timeOptions);
    }

    return `${formattedDate1}${isSameDay ? "-" : ", "}${formattedDate2}`;
  }

  async function onSubmitHandler(data) {
    const event = title;
    const { name, email } = data;

    setIsLoading(true);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, event }),
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

  if (router.isFallback) {
    return <div />;
  }

  return (
    <PageLayout title={`${title}`} stickyHeader transparentHeader staticBottom>
      <Container>
        <Breadcrumb
          prevPath={"Events"}
          currentPath={title}
          returnPath="events"
          absolutePosition={false}
        />
        {!success && (
          <>
            <section className="container">
              <div className="event-header">
                <div className="image-container">
                  <Image
                    src={logo}
                    width={190}
                    height={190}
                    alt="Job thumbnail"
                  />
                </div>
                <h1>{title}</h1>
              </div>
              <div className="event-sub-header">
                <h2 className="text primary">{primaryAnimatedText}</h2>
                <h2 className="text secondary">{secondaryAnimatedText}</h2>
              </div>
              <div className="main-info-container">
                <div className="content">
                  <AiFillCalendar size={62} />
                  <div className="event-date">
                    <p>{formatEventDate()}</p>
                    <p>{location}</p>
                  </div>
                </div>
                <form
                  method="post"
                  name="rsvp"
                  className="rsvp-form"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className="name">
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
                  <div className="email">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      {...register("email", {
                        required: "Please provide your email",
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
                  <div className="submit">
                    <button
                      type="submit"
                      className="rsvp-button"
                      disabled={isLoading}
                    >
                      RSVP Now!
                    </button>
                  </div>
                </form>
              </div>
              <div className="event-description">
                <p>{description}</p>
              </div>
              <div className="event-extra-description">
                <p>{extraDescription}</p>
              </div>
              <div className="event-photos">
                {photos.data.map((photo) => (
                  <div key={photo.id} className="image-container">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_CMS_URL + photo.attributes.url
                      }
                      width={140}
                      height={120}
                      alt="Event photo"
                      onClick={() => setModalPhoto(photo.attributes.url)}
                    />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
        {success && (
          <section className="events-thankyou">
            <div className="thank-you">Thank you!</div>
            <h3>Thank you for your confirming. We will contact you soon!</h3>
          </section>
        )}

        {modalPhoto && (
          <div className="photo-modal">
            <div className="close-button" onClick={() => setModalPhoto(null)}>
              <AiOutlineClose size={52} />
            </div>
            <div className="full-image-container">
              <Image
                src={process.env.NEXT_PUBLIC_CMS_URL + modalPhoto}
                fill
                alt="Event photo"
              />
            </div>
          </div>
        )}
      </Container>
    </PageLayout>
  );
}
