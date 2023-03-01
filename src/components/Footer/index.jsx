import classNames from "classnames";
import Container from "./styles";

export default function Footer({ staticBottom }) {
  return (
    <Container className={classNames({
      "static-bottom": staticBottom
    })}>
      <div className="footer-icons">
        <a href="https://twitter.com/web3wg/" target="_blank">
          <img src="svgs/brands/twitter.svg" className="svg" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCb0kys5UU-UpRlm9wG3_X4w"
          target="_blank"
        >
          <img src="svgs/brands/youtube.svg" className="svg" />
        </a>
        <a href="https://www.tiktok.com/@web3wg/" target="_blank">
          <img src="svgs/brands/tiktok.svg" className="svg" />
        </a>
        <a href="https://www.instagram.com/web3wg/" target="_blank">
          <img src="svgs/brands/instagram.svg" className="svg" />
        </a>
        <a
          href="https://medium.web3wg.org/the-most-important-web3-use-case-no-one-is-talking-about-yet-499b417cd9d"
          target="_blank"
        >
          <img src="svgs/brands/medium.svg" className="svg" />
        </a>
      </div>
      <div className="footer-text">&copy; Web3 Working Group {new Date().getFullYear()}</div>
    </Container>
  )
}