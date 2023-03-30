import styled from "styled-components";

export default styled.div`
  width: 100vw;
  position: relative;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    89.97deg,
    rgba(49, 55, 103, 0.3) 28.41%,
    rgba(49, 55, 103, 0) 78.56%
  );
  padding: 12px 12px;
  margin-top: 50px;
  margin-bottom: 50px;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 0px !important;
  }

  @media (max-width: 767.98px) {
    margin-top: 24px;
    margin-bottom: 24px;

    h1 {
      font-size: 1.6rem;
    }
  }
`;
