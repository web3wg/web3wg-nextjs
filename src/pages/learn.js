import { useState } from "react";
import Toggle from "react-toggle";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
  Player,
} from "@livepeer/react";
import axios from "axios";
import { video_info } from "play-dl";
import YoutubeReactPlayer from "react-player/youtube";
import PageLayout from "@components/PageLayout";
import SectionHeader from "@components/SectionHeader";
import isEmpty from "@utils/isEmpty";
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

    function getArweaveIdFromUrl(url) {
      const arweavePattern = /arweave\.net\/([a-zA-Z0-9-_]+)/;
      const match = url.match(arweavePattern);

      if (match && match[1]) {
        return match[1];
      }

      return null;
    }

    async function getVideoInfo(id = "") {
      const youTubeID = id;

      const info = await video_info(
        "https://www.youtube.com/watch?v=" + youTubeID
      );

      const { thumbnails, title, description } = info.video_details;

      const thumbnail = thumbnails.sort((a, b) => b.width - a.width)[0];

      const thumbnailUrl = thumbnail.url;

      const videoUrl = "https://www.youtube.com/watch?v=" + youTubeID;

      return { thumbnail: thumbnailUrl, video: videoUrl, title, description };
    }

    async function getBundlrInfo(txid = "") {
      const { data } = await axios.get(
        "https://node1.bundlr.network/tx/" + txid
      );

      const { tags } = data;

      const { value: title } = tags.filter(
        (tag) => tag.name === "Video-Title"
      )[0];
      const { value: description } = tags.filter(
        (tag) => tag.name === "Video-Description"
      )[0];
      const { value: video } = tags.filter(
        (tag) => tag.name === "Video-Filename"
      )[0];
      const { value: thumbnail } = tags.filter(
        (tag) => tag.name === "Video-Thumbnail"
      )[0];

      const { data: metadata } = await axios.get(
        "https://node1.bundlr.network/tx/" + txid + "/data"
      );

      const { paths } = metadata;

      const videoTxid = paths[video].id;

      return { title, description, video, thumbnail, videoTxid };
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

      let web2Data = {};
      let web3Data = {};

      if (youtubeId) {
        const {
          title: titleWeb2,
          description: descriptionWeb2,
          video: videoWeb2,
          thumbnail: thumbnailWeb2,
        } = await getVideoInfo(youtubeId);

        web2Data = {
          id: youtubeId,
          title: titleWeb2,
          description: descriptionWeb2,
          video: videoWeb2,
          thumbnail: thumbnailWeb2,
        };
      }

      if (learnVideos[index]?.attributes?.web3Link) {
        const arUrl = getArweaveIdFromUrl(
          learnVideos[index]?.attributes?.web3Link
        );

        const {
          title: titleWeb3,
          description: descriptionWeb3,
          video: videoWeb3,
          thumbnail: thumbnailWeb3,
          videoTxid,
        } = await getBundlrInfo(arUrl);

        web3Data = {
          id: arUrl,
          title: titleWeb3,
          description: descriptionWeb3,
          video: videoWeb3,
          thumbnail: thumbnailWeb3,
          videoTxid,
        };
      }

      learnVideos[index] = {
        ...learnVideos[index],
        attributes: {
          ...learnVideos[index].attributes,
        },
        web2Data,
        web3Data,
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
                        {...learnVideo}
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

function LearnVideo({ web2Data = {}, web3Data = {}, selectedNetwork }) {
  if (isEmpty(web2Data) && isEmpty(web3Data)) return false;

  function getVideoTitle() {
    return selectedNetwork === "WEB3" ? web3Data.title : web2Data.title;
  }

  function getVideoDescription() {
    return selectedNetwork === "WEB3"
      ? web3Data.description
      : web2Data.description;
  }

  return (
    <VideoContainer className="col-lg-4 mb-4 mt-2 col-sm-12">
      <div className="embed-responsive embed-responsive-16by9">
        {!isEmpty(web3Data) && selectedNetwork === "WEB3" ? (
          <div className="embed-responsive-item">
            <Player
              title="Waterfalls"
              src={`ar://${web3Data.videoTxid}`}
              showTitle={false}
              poster={`https://arweave.net/${web3Data.id}/${web3Data.thumbnail}`}
              muted
              autoPlay={false}
              controls={false}
              autoUrlUpload={{
                fallback: true,
                ipfsGateway: "https://w3s.link",
              }}
            />
          </div>
        ) : (
          <div className="embed-responsive-item">
            <YoutubeReactPlayer
              controls
              url={web2Data.video}
              light={web2Data.thumbnail}
              height={"100%"}
              width={"100%"}
              playing
            />
          </div>
        )}
      </div>
      <h3 className="video-title text-truncate" title={getVideoTitle()}>
        {getVideoTitle()}
      </h3>
      <p className="video-description">{getVideoDescription()}</p>
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
