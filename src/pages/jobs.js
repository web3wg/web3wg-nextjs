import PageLayout from "@components/PageLayout";
import Container from "@styles/pages/jobs";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_CMS_URL + "/api/jobs?fields[0]=slug&fields[1]=title"
  );
  const { data: jobs } = await res.json();

  return {
    props: {
      jobs,
    },
    revalidate: 300,
  };
}

export default function Jobs({ jobs }) {
  return (
    <PageLayout title={"Jobs"}>
      <Container>
        <section className="container">
          <div className="jobs-title">
            <h1>Jobs at Web3 Working Group</h1>
          </div>
          {!jobs.length && <h3>There are no jobs available at the moment</h3>}
          {!!jobs.length && (
            <div className="jobs-list">
              {jobs.map((job) => (
                <div key={job.id} className="jobs-list-item1">
                  <h2>
                    <Link href={`/job/${job.attributes.slug}`}>
                      {job.attributes.title}
                    </Link>
                  </h2>
                </div>
              ))}
            </div>
          )}
        </section>
      </Container>
    </PageLayout>
  );
}
