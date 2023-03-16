import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Container from "./styles";

import logoDark from "../../../public/images/w3wg_lighttext_300.png"
import logoLight from "../../../public/images/w3wg_blacktext_300.png"

import TwitterSVG from "../../../public/svgs/brands/twitter.svg";
import YoutubeSVG from "../../../public/svgs/brands/youtube.svg";
import TiktokSVG from "../../../public/svgs/brands/tiktok.svg";
import InstagramSVG from "../../../public/svgs/brands/instagram.svg";
import MediumSVG from "../../../public/svgs/brands/medium.svg";

export default function Footer({ staticBottom }) {
  return (
    <Container className={classNames({
      "static-bottom": staticBottom,
    })}>
      <div className="footer-container">
        <div className="footer-logo">
          <Link
            href={"/"}
          >
            <Image
              src={logoLight}
              className="logo-light"
              width={72}
              height={72}
              alt={"w3wg logo"}
              priority={true}
            />
            <Image
              src={logoDark}
              className="logo-dark"
              width={72}
              height={72}
              alt={"w3wg logo"}
              priority={true}
            />
          </Link>
        </div>
        <p className="footer-text">
          &copy; Web3 Working Group {new Date().getFullYear()}
        </p>
        <div className="footer-icons">
          <Link href={"https://www.youtube.com/channel/UCb0kys5UU-UpRlm9wG3_X4w"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={YoutubeSVG}
              className="svg"
              width={24}
              height={24}
              alt="Youtube"
            />
          </Link>
          <Link href={"https://twitter.com/web3wg/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={TwitterSVG}
              className="svg"
              width={24}
              height={24}
              alt="Twitter"
            />
          </Link>
          <Link href={"https://www.tiktok.com/@web3wg/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={TiktokSVG}
              className="svg"
              width={24}
              height={24}
              alt="Tiktok"
            />
          </Link>
          <Link href={"https://www.instagram.com/web3wg/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={InstagramSVG}
              className="svg"
              width={24}
              height={24}
              alt="Instagram"
            />
          </Link>
          <Link
            href={"https://medium.web3wg.org/the-most-important-web3-use-case-no-one-is-talking-about-yet-499b417cd9d"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={MediumSVG}
              className="svg"
              width={24}
              height={24}
              alt="Medium"
            />
          </Link>
        </div>
      </div>
    </Container>
  )
}