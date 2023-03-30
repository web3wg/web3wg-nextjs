import styled from "styled-components";

export default styled.div`
  position: relative;
  text-align: center;
  margin-top: 124px;

  .event-header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-bottom: 24px;
    gap: 12px;

    h1 {
      font-size: 4rem;
      font-family: "GothamUltraItalic", sans-serif;
      display: inline-block;
      background-clip: text;
      padding: 0px 12px;
      text-shadow: none;
      -webkit-background-clip: text;
      background-image: -webkit-linear-gradient(
        135deg,
        rgba(252, 238, 33, 1) 0%,
        rgba(225, 13, 140, 1) 50%,
        rgba(255, 96, 191, 1) 100%
      );
      color: transparent;
    }
  }

  .event-sub-header {
    position: relative;
    text-align: center;
    min-height: 4rem;
    margin: 32px 0px;

    .text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      opacity: 0;
      animation: dissolve 8s linear infinite;
      font-size: 2rem;
    }

    .primary {
      animation-delay: 0s;
    }

    .secondary {
      animation-delay: 4s;
    }
  }

  .main-info-container {
    display: flex;
    gap: 24px;
    padding: 24px;
    justify-content: space-between;
    border-radius: 12px;
    background: linear-gradient(
      89.97deg,
      rgba(49, 55, 103, 0.3) 28.41%,
      rgba(49, 55, 103, 0) 78.56%
    );
    margin-bottom: 48px;

    .content {
      display: flex;
      gap: 24px;
      align-items: center;
      border-radius: 12px;

      svg {
        color: #e1058c;
      }

      .event-date {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        p {
          font-weight: 700;
          margin-bottom: 0px;

          &:last-child {
            font-weight: 300;
          }
        }
      }
    }

    .rsvp-form {
      max-width: 420px;
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .rsvp-button {
        width: 100%;
        background: #e1058c;
        border: none;
        box-shadow: -12px 16px 38px rgba(237, 7, 143, 0.3);
        border-radius: 22px;
        padding: 12px 28px;
        transition: 0.4s;
        color: #fff;
        cursor: pointer;

        &:hover {
          transform: scale(0.95);
          box-shadow: -12px 0px 38px rgba(237, 7, 143, 0.3);
        }
      }
    }
  }

  .event-description {
    p {
      font-size: 1.6rem;
      font-weight: 200;
    }
  }

  .event-extra-description {
    p {
      max-width: 760px;
      font-size: 2rem;
      font-family: "GothamUltraItalic", sans-serif;
      display: inline-block;
      background-clip: text;
      padding: 0px 12px;
      text-shadow: none;
      -webkit-background-clip: text;
      background-image: -webkit-linear-gradient(
        135deg,
        rgba(252, 238, 33, 1) 0%,
        rgba(225, 13, 140, 1) 50%,
        rgba(255, 96, 191, 1) 100%
      );
      color: transparent;
    }
  }

  .event-photos {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 60px 0px 120px;

    .image-container {
      position: relative;
      border-radius: 12px;
      transition: 0.2s;
      cursor: zoom-in;

      &:hover {
        transform: scale(0.98);
        box-shadow: -12px 0px 38px rgba(237, 7, 143, 0.3);
      }

      img {
        object-fit: cover;
        border-radius: 12px;
      }
    }
  }

  .photo-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    z-index: 100;
    padding: 48px;

    .close-button {
      position: fixed;
      top: 12px;
      right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #e1058c;
      border-radius: 50%;
      cursor: pointer;
      z-index: 110;

      &:hover {
        transform: scale(0.98);
        box-shadow: -12px 0px 38px rgba(237, 7, 143, 0.3);
      }
    }

    .full-image-container {
      position: relative;
      height: 100%;
      border-radius: 12px;

      img {
        object-fit: contain;
        border-radius: 12px;
      }
    }
  }

  @media only screen and (max-width: 767.98px) {
    .event-header {
      flex-direction: column;
      margin-bottom: 24px;
      gap: 12px;

      h1 {
        font-size: 3rem;
      }

      .image-container {
        display: none;
      }
    }

    .event-sub-header {
      margin-bottom: 200px;
    }

    .main-info-container {
      display: flex;
      gap: 12px;
      padding: 24px;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 24px;

      .content {
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: flex-start;
        text-align: left;

        svg {
          color: #e1058c;
        }
      }

      .rsvp-form {
        max-width: 420px;
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }

    .event-description {
      padding: 0px 12px;

      p {
        font-size: 1.2rem;
      }
    }

    .event-extra-description {
      padding: 0px 12px;

      p {
        font-size: 1.6rem;
      }
    }

    .event-photos {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
      padding: 40px 0px 80px;

      .image-container {
        position: relative;
        border-radius: 12px;
        cursor: zoom-in;

        img {
          object-fit: cover;
          border-radius: 12px;
        }
      }
    }

    .photo-modal {
      padding: 12px;
    }
  }

  @keyframes dissolve {
    0% {
      opacity: 0;
    }
    10%,
    45% {
      opacity: 1;
    }
    55%,
    100% {
      opacity: 0;
    }
  }
`;
