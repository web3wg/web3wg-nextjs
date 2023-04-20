import { useState } from "react";
import Toggle from "react-toggle";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
  Player,
} from "@livepeer/react";
import { video_info } from "play-dl";
import ReactPlayer from "react-player/lazy";
import YoutubeReactPlayer from "react-player/youtube";
import PageLayout from "@components/PageLayout";
import SectionHeader from "@components/SectionHeader";
import Container, {
  VideoContainer,
  MediumArticleContainer,
} from "@styles/pages/learn";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

export async function getStaticProps() {
  const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME) || 300;

  try {
    function extractYouTubeVideoId(embedUrl = "") {
      const urlPattern =
        /^https?:\/\/(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?.*)?$/;
      const match = embedUrl.match(urlPattern);

      if (match && match[1]) {
        return match[1];
      } else {
        return null;
      }
    }

    async function getVideoInfo(id = "") {
      const youTubeID = id;

      const info = await video_info(
        "https://www.youtube.com/watch?v=" + youTubeID
      );

      const thumbnail = info.video_details.thumbnails.sort(
        (a, b) => b.width - a.width
      )[0];

      const thumbnailUrl = thumbnail.url;

      const videoUrl = "https://www.youtube.com/watch?v=" + youTubeID; //format.url;

      return { thumbnailUrl, videoUrl };
    }

    const resLearnVideos = await fetch(
      process.env.NEXT_PUBLIC_CMS_URL +
        "/api/learn-videos?sort=displayOrder:asc"
    );
    const resMediumArticles = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@web3wg"
    );

    let { data: learnVideos } = await resLearnVideos.json();
    const { items: mediumArticles } = await resMediumArticles.json();

    for (let index = 0; index < learnVideos.length; index++) {
      const youtubeId = extractYouTubeVideoId(
        learnVideos[index]?.attributes?.web2Link
      );
      const { thumbnailUrl, videoUrl } = await getVideoInfo(youtubeId);

      learnVideos[index] = {
        ...learnVideos[index],
        attributes: {
          ...learnVideos[index].attributes,
          thumbnailUrl,
          web2Link: videoUrl,
        },
      };
    }

    return {
      props: {
        learnVideos: learnVideos || [],
        mediumArticles: mediumArticles || [],
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

export default function Learn({ learnVideos = [], mediumArticles = [] }) {
  const [selectedNetwork, setSelectedNetwork] = useState("WEB2");

  function handleToggleChange() {
    setSelectedNetwork((prevState) => (prevState === "WEB2" ? "WEB3" : "WEB2"));
  }

  return (
    <PageLayout title={"Learn"} gradientCenter>
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-12 justify-content-center">
              <SectionHeader text={"What kind of internet do you want?"} />
              <div className="embed-responsive embed-responsive-16by9 main-embed">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/vSncC5nfOEY"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div>
          {!!learnVideos.length && (
            <>
              <SectionHeader text={"What is Web3 series"} />
              <div className="container">
                <div className="row">
                  <div className="network-toggle">
                    <div className="toggle-container">
                      <span>Youtube</span>
                      <Toggle icons={false} onChange={handleToggleChange} />
                      <span>Arweave</span>
                    </div>
                    <h1>Select the source of the videos</h1>
                  </div>
                </div>
                <div className="row">
                  <LivepeerConfig client={livepeerClient}>
                    {learnVideos.map((learnVideo) => (
                      <LearnVideo
                        key={learnVideo.id}
                        selectedNetwork={selectedNetwork}
                        {...learnVideo.attributes}
                      />
                    ))}
                  </LivepeerConfig>
                </div>
              </div>
            </>
          )}
          {!!mediumArticles.length && (
            <div className="container">
              <SectionHeader text={"Articles"} />
              <div className="row articles-container d-flex justify-content-center">
                {mediumArticles.map((mediumArticle) => (
                  <MediumArticle
                    key={mediumArticle.pubDate}
                    {...mediumArticle}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </PageLayout>
  );
}

function LearnVideo({
  web2Link,
  web3Link,
  selectedNetwork,
  title,
  shortDescription,
  thumbnailUrl,
}) {
  const url = selectedNetwork === "WEB2" ? web2Link : web3Link;

  if (!url) return false;

  return (
    <VideoContainer className="col-lg-4 mb-4 mt-2 col-sm-12">
      <div className="embed-responsive embed-responsive-16by9">
        {web3Link && selectedNetwork === "WEB3" ? (
          <div className="embed-responsive-item">
            <ReactPlayer
              controls
              url={web3Link}
              light={thumbnailUrl}
              height={"100%"}
              width={"100%"}
              playing
            />
          </div>
        ) : (
          <div className="embed-responsive-item">
            <YoutubeReactPlayer
              controls
              url={web2Link}
              light={thumbnailUrl}
              height={"100%"}
              width={"100%"}
              playing
            />
          </div>
        )}
      </div>
      <h3 className="video-title text-truncate" title={title}>
        {title}
      </h3>
      <p className="video-description">{shortDescription}</p>
    </VideoContainer>
  );
}

function MediumArticle({
  author,
  description,
  content,
  link,
  pubDate,
  thumbnail,
  title,
}) {
  return (
    <MediumArticleContainer
      thumbnail={thumbnail}
      className="col-lg-8 mb-8 mt-2 col-sm-12 justify-content-center"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="article-thumbnail" />
      <h1 className="article-title">{title}</h1>
      <p className="article-description">
        {description.replace(/<[^>]+>/g, "")}
      </p>
      <span
        className="article-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the article on medium.web3wg.org
      </span>
    </MediumArticleContainer>
  );
}
