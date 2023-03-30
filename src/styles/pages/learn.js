import styled, { css } from "styled-components";

export default styled.div`
  .network-toggle {
    color: #fff;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;

    h1 {
      text-align: center;
      font-size: 1rem;
      margin-top: 8px;
      font-weight: 300;
      opacity: 0.8;
    }

    .toggle-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      span {
        font-size: 2rem;
        font-weight: 900;

        @media (max-width: 767.98px) {
          font-size: 1.4rem;
        }
      }
    }
  }

  .embed-responsive {
    border-radius: 12px;

    &.main-embed {
      padding: 20px;
      max-width: 720px;
      margin: auto;
    }

    .embed-responsive-item {
      padding: 16px;
      border: 1px solid #fff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("/images/w3wg_lighttext_300.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      & div {
        border-radius: 12px;
      }
    }
  }

  .articles-container {
    margin-bottom: 200px;
  }

  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #e1058c;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    opacity: 0.8;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: #e1058c;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: #e1058c;
    opacity: 0.8;
  }

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: #19ab27;
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
    -moz-box-shadow: 0px 0px 3px 2px #0099e0;
    box-shadow: 0px 0px 2px 3px #0099e0;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
    -moz-box-shadow: 0px 0px 5px 5px #0099e0;
    box-shadow: 0px 0px 5px 5px #0099e0;
  }
`;

export const VideoContainer = styled.div`
  font-family: "Montserrat", sans-serif;

  .video-title {
    font-size: 1.3rem;
    margin-top: 16px;
    color: #fff;
    font-weight: 500;
  }

  .video-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 400;
    opacity: 0.6;
  }
`;

export const MediumArticleContainer = styled.a`
  margin: auto;
  margin-bottom: 1.5rem;
  transition: filter 0.2s;

  &:hover {
    text-decoration: none;
    filter: brightness(0.9);

    .article-link {
      text-decoration: underline;
    }
  }

  .article-thumbnail {
    text-align: left;
    border-radius: 12px;
    height: 280px;
    background: url("/images/w3wg_lighttext_300.png");
    ${({ thumbnail }) =>
      thumbnail &&
      css`
        background: url(${thumbnail});
      `};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #343a40;
    margin-bottom: 12px;
    ${({ thumbnail }) =>
      !thumbnail &&
      css`
        background-size: contain;
      `};
  }

  .article-title {
    text-align: left;
    font-size: 20px;
    margin: 0;
    font-weight: 700;
  }

  .article-description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.8;
  }

  .article-link {
    display: block;
    text-align: left;
    color: #1a95b3;
  }
`;
