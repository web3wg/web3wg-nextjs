import styled from "styled-components";

export default styled.main`
  position: relative;
  min-height: calc(100vh - 144px);

  &:after {
    content: "";
    position: fixed;
    width: 80%;
    height: 80%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(237, 7, 143, 0.15);
    opacity: 0.7;
    border-radius: 50%;
    filter: blur(120px);
    z-index: -1;
    animation: 20s animate-background infinite forwards ease-in-out;

    ${({ gradientCenter }) =>
      gradientCenter &&
      `
      width: 80%;
      height: 50%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `}
  }

  @keyframes animate-background {
    0% {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 80%;
      height: 80%;
    }
    25% {
      top: 50%;
      bottom: 0;
      left: 50%;
      right: 0;
      width: 150%;
      height: 150%;
      filter: blur(80px);
    }
    50% {
      top: 0%;
      bottom: 50%;
      left: 0%;
      right: 50%;
      width: 100%;
      height: 100%;
    }
    75% {
      top: 50%;
      bottom: 50%;
      left: 50%;
      right: 50%;
      width: 70%;
      height: 70%;
    }
    100% {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 80%;
      height: 80%;
      filter: blur(130px);
    }
  }
`;
