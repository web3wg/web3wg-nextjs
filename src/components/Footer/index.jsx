import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Container from "./styles";

import TwitterSVG from "../../../public/svgs/brands/twitter.svg";
import YoutubeSVG from "../../../public/svgs/brands/youtube.svg";
import TiktokSVG from "../../../public/svgs/brands/tiktok.svg";
import InstagramSVG from "../../../public/svgs/brands/instagram.svg";
import MediumSVG from "../../../public/svgs/brands/medium.svg";

export default function Footer({ staticBottom }) {
  return (
    <Container className={classNames({
      "static-bottom": staticBottom
    })}>
      <div className="footer-icons">
        <Link href={"https://twitter.com/web3wg/"}>
          <Image
            src={TwitterSVG}
            className="svg"
            width={30}
            height={30}
            alt="Twitter"
          />
        </Link>
        <Link href={"https://www.youtube.com/channel/UCb0kys5UU-UpRlm9wG3_X4w"}>
          <Image
            src={YoutubeSVG}
            className="svg"
            width={30}
            height={30}
            alt="Youtube"
          />
        </Link>
        <Link href={"https://www.tiktok.com/@web3wg/"}>
          <Image
            src={TiktokSVG}
            className="svg"
            width={30}
            height={30}
            alt="Tiktok"
          />
        </Link>
        <Link href={"https://www.instagram.com/web3wg/"}>
          <Image
            src={InstagramSVG}
            className="svg"
            width={30}
            height={30}
            alt="Instagram"
          />
        </Link>
        <Link href={"https://medium.web3wg.org/the-most-important-web3-use-case-no-one-is-talking-about-yet-499b417cd9d"}>
          <Image
            src={MediumSVG}
            className="svg"
            width={30}
            height={30}
            alt="Medium"
          />
        </Link>
      </div>
      <div className="footer-text">&copy; Web3 Working Group {new Date().getFullYear()}</div>
    </Container>
  )
}