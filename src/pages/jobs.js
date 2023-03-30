import Link from "next/link";
import Image from "next/image";
import PageLayout from "@components/PageLayout";
import SectionHeader from "@components/SectionHeader";
import formatDate from "@utils/formatDate";
import Container, { JobContainer } from "@styles/pages/jobs";

import logo from "../../public/images/w3wg_lighttext_300.png";

export async function getStaticProps() {
  const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME) || 300;

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CMS_URL +
        "/api/jobs?fields[0]=slug&fields[1]=title&fields[2]=aboutYou&fields[3]=createdAt"
    );
    const { data: jobs } = await res.json();

    return {
      props: {
        jobs: jobs || [],
      },
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return {
      props: {},
      revalidate: REVALIDATE_TIME,
    };
  }
}

export default function Jobs({ jobs = [] }) {
  return (
    <PageLayout title={"Jobs"}>
      <Container>
        <SectionHeader text="Jobs at Web3 Working Group" />
        <section className="container">
          {!jobs.length && (
            <h3 className="no-jobs">
              There are no jobs available at the moment
            </h3>
          )}
          {!!jobs.length && (
            <>
              <div className="jobs-list">
                {jobs.map((job) => (
                  <Job key={job.id} {...job.attributes} />
                ))}
              </div>
            </>
          )}
        </section>
      </Container>
    </PageLayout>
  );
}

function Job({ slug, title, aboutYou, createdAt }) {
  return (
    <JobContainer>
      <div className="job-thumbnail">
        <div className="image-container">
          <Image src={logo} width={104} height={104} alt="Job thumbnail" />
        </div>
      </div>
      <div className="job-details">
        <h1 className="job-publish-date">{formatDate(createdAt)}</h1>
        <h1 className="job-title">{title}</h1>
        <p className="job-description" title={aboutYou}>
          {aboutYou}
        </p>
      </div>
      <Link className="job-apply" href={`/job/${slug}`}>
        Apply Now!
      </Link>
    </JobContainer>
  );
}
