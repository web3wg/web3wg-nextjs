import styled from "styled-components";

export default styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
  padding: 10px 50px;
  bottom: 0;
  text-align: center;
  background-color: #313767;

  &.static-bottom {
    position: relative;
  }

  .footer-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .footer-logo {
      display: flex;
      justify-content: flex-start;
      flex-grow: 1;
      flex-basis: 0;
      min-width: 0;
    }

    .footer-text {
      display: flex;
      justify-content: center;
      flex-grow: 1;
      flex-basis: 0;
      min-width: 0;
      align-items: center;
      gap: 15px;
      text-align: center;
      color: var(--text);
      line-height: normal;
      height: fit-content;
      margin-bottom: 0px;
      font-family: "Montserrat", sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.175em;
      font-size: 0.7em;
      opacity: 0.7;
    }

    .footer-icons {
      flex-grow: 1;
      flex-basis: 0;
      min-width: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 40px;
      margin-bottom: 5px;
      filter: brightness(1.2);
    }
  }

  @media (max-width: 575.98px) {
    padding: 5px 10px;

    .footer-container {
      display: flex;
      flex-wrap: wrap;

      .footer-logo,
      .footer-text {
        flex-grow: unset;
        flex-basis: unset;
      }

      .footer-text {
        text-align: left;
        flex: 1;
        padding-right: 10px;
      }

      .footer-icons {
        width: 100%;
        gap: 10px;
        flex-wrap: wrap;
        min-width: 25%;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 995.98px) {
    padding: 10px 20px;

    .footer-container {
      .footer-logo {
        flex-grow: unset;
        flex-basis: unset;
        padding-right: 15px;
      }

      .footer-text {
        justify-content: flex-start;
      }

      .footer-icons {
        gap: 15px;
      }
    }
  }
`;
