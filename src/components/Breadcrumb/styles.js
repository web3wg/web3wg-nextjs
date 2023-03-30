import styled from "styled-components";

export default styled.div`
  position: absolute;
  width: 100vw;
  top: 124px;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  background: linear-gradient(
    89.97deg,
    rgba(49, 55, 103, 0.3) 28.41%,
    rgba(49, 55, 103, 0) 78.56%
  );
  padding: 12px 12px;
  transition: 0.4s;
  cursor: pointer;
  z-index: 5;

  ${({ absolutePosition }) =>
    !absolutePosition && `
    position: relative;
    top: 0;
    margin-bottom: 45px;
  `}

  &:hover {
    box-shadow: -6px 0px 12px rgba(237, 7, 143, 0.3);

    .return-button {
      transform: scale(1.1);
    }
  }

  a {
    color: #000;
  }

  .return-button {
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #e1058c;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }

  .breadcrumb-path {
    display: flex;
    position: relative;
    padding: 0px;
    padding-bottom: 0px !important;

    h1 {
      font-size: 1rem;
      color: #fff;
      margin-bottom: 0px !important;
      font-weight: 500;
      padding: 0px;
      padding-left: 68px;
      padding-right: 20px;
      z-index: 0;

      .current-path {
        padding-left: 4px;
        opacity: 0.2;
      }
    }
  }

  @media only screen and (max-width: 767.98px) {
    position: relative;
    top: 0;
    margin-top: 140px;
  }
`;
