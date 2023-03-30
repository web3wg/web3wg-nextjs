import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import PageLayout from "@components/PageLayout";
import Container from "@styles/pages/job";
import Breadcrumb from "@components/Breadcrumb";

import logo from "../../../public/images/w3wg_lighttext_300.png";

export async function getStaticPaths() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CMS_URL + "/api/jobs?fields[0]=slug"
    );
    const { data: jobsSlugs } = await res.json();

    const paths = jobsSlugs.map((jobSlug) => {
      return {
        params: {
          slug: jobSlug.attributes.slug,
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
        `/api/jobs?populate=*&filters[slug][$eq]=${params.slug}`
    );
    const { data: jobs } = await res.json();

    return {
      props: {
        job: jobs[0],
      },
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function Job({ job = { attributes: {} } }) {
  const router = useRouter();

  const {
    title,
    aboutYou,
    theJob,
    responsibilities,
    whatSuccessLooksLike,
    requirements,
    whatToExpectDuringTheInterviewProcess,
    aboutWeb3WorkingGroup,
    tags,
  } = job.attributes;
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
    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append("fname", data.fname);
      formData.append("lname", data.lname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);

      for (const file of data.files) {
        formData.append("files", file);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("An error occured");
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
          prevPath={"Jobs at Web3 Working Group"}
          currentPath={title}
          returnPath="jobs"
        />
        {!success && (
          <>
            <section className="container">
              <div className="job-header">
                <h1>{title}</h1>
                {!!tags?.data?.length && (
                  <div className="job-tags-list">
                    {tags.data.map((tag) => (
                      <div className="job-tag" key={tag.id}>
                        {tag.attributes.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="job-header-logo">
                <div className="image-container">
                  <Image
                    src={logo}
                    width={190}
                    height={190}
                    alt="Job thumbnail"
                  />
                </div>
              </div>
              <div className="jobs-content-block">
                <h3 className="job-section-title">About you</h3>
                <Markdown options={{ forceBlock: true }}>{aboutYou}</Markdown>
                <h3 className="job-section-title">The Job</h3>
                <Markdown options={{ forceBlock: true }}>{theJob}</Markdown>
                <h4 className="job-section-title">Responsibilities</h4>
                <Markdown options={{ forceBlock: true }}>
                  {responsibilities}
                </Markdown>
                <h4 className="job-section-title">What success looks like</h4>
                <Markdown options={{ forceBlock: true }}>
                  {whatSuccessLooksLike}
                </Markdown>
                <h3 className="job-section-title">Requirements</h3>
                <Markdown options={{ forceBlock: true }}>
                  {requirements}
                </Markdown>
                <h3 className="job-section-title">About Web3 Working Group</h3>
                <Markdown options={{ forceBlock: true }}>
                  {aboutWeb3WorkingGroup}
                </Markdown>
                <h3 className="job-section-title">
                  What to expect during the interview process:
                </h3>
                <Markdown options={{ forceBlock: true }}>
                  {whatToExpectDuringTheInterviewProcess}
                </Markdown>
              </div>
              <div className="apply-form" id="apply">
                <form
                  method="post"
                  name="jobsubmissions"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className="grid-container">
                    <div className="fname">
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="First name"
                        {...register("fname", {
                          required: "Please provide your first name",
                        })}
                      />
                      {errors.fname && (
                        <span className="error-message">
                          {errors.fname.message}
                        </span>
                      )}
                    </div>
                    <div className="lname">
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Last name"
                        {...register("lname", {
                          required: "Please provide your last name",
                        })}
                      />
                      {errors.lname && (
                        <span className="error-message">
                          {errors.lname.message}
                        </span>
                      )}
                    </div>
                    <div className="phone">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone (optional)"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <span className="error-message">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                    <div className="email">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
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
                    <div className="upload-container">
                      <input
                        type="file"
                        name="file_upload"
                        id="file_upload"
                        accept="application/pdf, application/x-iwork-pages-sffpages, application/vnd.apple.pages, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        multiple={true}
                        {...register("files", {
                          validate: {
                            maxFiles: (files) =>
                              files.length <= 1 || "Maximum 1 file allowed",
                            maxSize: (files) => {
                              for (let i = 0; i < files.length; i++) {
                                if (files[i].size > 10485760) {
                                  return "File size should be less than 10MB";
                                }
                              }
                              return true;
                            },
                          },
                        })}
                        max="1"
                      />
                      {errors.files && (
                        <span className="error-message">
                          {errors.files.message}
                        </span>
                      )}
                    </div>
                    <div className="cover-letter">
                      <textarea
                        className="letter"
                        id="message"
                        name="message"
                        placeholder="Cover Letter"
                        {...register("message", {
                          required: "Please include a cover Letter",
                        })}
                      ></textarea>
                      {errors.message && (
                        <span className="error-message">
                          {errors.message.message}
                        </span>
                      )}
                      {error && <span className="error-message">{error}</span>}
                    </div>
                    <div className="submit">
                      <button
                        type="submit"
                        className="job-apply"
                        disabled={isLoading}
                      >
                        Apply Now!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </>
        )}
        {success && (
          <section className="jobs-thankyou">
            <div className="thank-you">Thank you!</div>
            <h3 style={{ textAlign: "center" }}>
              Thank you for your submission. We will contact you soon!
            </h3>
          </section>
        )}
      </Container>
    </PageLayout>
  );
}
