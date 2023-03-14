import styled from "styled-components";

export default styled.div`
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  hr {
    position: relative;
    border: none;
    height: 4px;
    background: grey;
  }

  textarea {
    padding: 12px 20px;
  }

  h3 {
    text-align: center;
  }

  @media (max-width: 989) {
    .container {
      width: 70%;
    }
  }

  @media (min-width: 990) {
    .container {
      width: 70%;
    }
  }
`;
