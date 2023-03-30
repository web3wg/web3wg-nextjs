import Link from "next/link";
import Image from "next/image";
import PageLayout from "@components/PageLayout";
import SectionHeader from "@components/SectionHeader";
import formatDate from "@utils/formatDate";
import Container, { EventContainer } from "@styles/pages/events";

import logo from "../../public/images/w3wg_lighttext_300.png";

export async function getStaticProps() {
  const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME) || 300;

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CMS_URL +
        "/api/events?fields[0]=slug&fields[1]=title&fields[2]=description&fields[3]=startDate"
    );
    const { data: events } = await res.json();

    return {
      props: {
        events: events || [],
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

export default function Events({ events = [] }) {
  return (
    <PageLayout title={"Events"}>
      <Container>
        <SectionHeader text="Events at Web3 Working Group" />
        <section className="container">
          {!events.length && (
            <h3 className="no-events">
              There are no events available at the moment
            </h3>
          )}
          {!!events.length && (
            <>
              <div className="events-list">
                {events.map((event) => (
                  <Event key={event.id} {...event.attributes} />
                ))}
              </div>
            </>
          )}
        </section>
      </Container>
    </PageLayout>
  );
}

function Event({ slug, title, description, startDate }) {
  return (
    <EventContainer>
      <div className="event-thumbnail">
        <div className="image-container">
          <Image src={logo} width={104} height={104} alt="Event thumbnail" />
        </div>
      </div>
      <div className="event-details">
        <h1 className="event-date">{formatDate(startDate)}</h1>
        <h1 className="event-title">{title}</h1>
        <p className="event-description" title={description}>
          {description}
        </p>
      </div>
      <Link className="event-button" href={`/event/${slug}`}>
        See details
      </Link>
    </EventContainer>
  );
}
