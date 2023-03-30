import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Container from "./styles";

export default function Breadcrumb({
  prevPath,
  currentPath,
  returnPath,
  absolutePosition = true
}) {
  return (
    <Container absolutePosition={absolutePosition}>
      <div className="breadcrumb-path container">
        <Link href={`/${returnPath}`}>
          <div className="return-button">
            <AiOutlineArrowLeft size={16} />
          </div>
          <h1>
            <span className="prev-path">{prevPath} /</span>
            <span className="current-path">{currentPath}</span>
          </h1>
        </Link>
      </div>
    </Container>
  )
}