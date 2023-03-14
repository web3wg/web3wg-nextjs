import PageLayout from "@components/PageLayout";
import Container, { MediumArticleContainer } from "@styles/pages/learn";

export async function getStaticProps() {
  const resYoutubeVideos = await fetch(
    process.env.NEXT_PUBLIC_CMS_URL +
      "/api/youtube-videos?sort=displayOrder:asc"
  );
  const resMediumArticles = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@web3wg"
  );

  const { data: youtubeVideos } = await resYoutubeVideos.json();
  const { items: mediumArticles } = await resMediumArticles.json();

  return {
    props: {
      youtubeVideos,
      mediumArticles,
    },
    revalidate: 300,
  };
}

export default function Learn({ youtubeVideos, mediumArticles }) {
  return (
    <PageLayout title={"Learn"}>
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-left">
                WHAT KIND OF INTERNET DO <span className="highlight">YOU</span>{" "}
                WANT?&nbsp;
              </h1>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/vSncC5nfOEY"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {!!youtubeVideos.length && (
            <>
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 mb-4 mt-2 text-center">
                      <h3>What is Web3 series</h3>
                    </div>
                  </div>
                </div>
              </section>
              <div className="container">
                <div className="row">
                  {youtubeVideos.map((youtubeVideo) => (
                    <YoutubeVideo
                      key={youtubeVideo.id}
                      {...youtubeVideo.attributes}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {!!mediumArticles.length && (
            <div className="container">
              <div className="col-lg-12 mb-4 mt-2 text-center">
                <h3>Articles</h3>
              </div>
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

function YoutubeVideo({ link }) {
  return (
    <div className="col-lg-4 mb-4 mt-2 col-sm-12 text-center">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={link}></iframe>
      </div>
    </div>
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
