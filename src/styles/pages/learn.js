import styled, { css } from "styled-components";

export default styled.div`
  .articles-container {
    margin-bottom: 200px;
  }
`;

export const MediumArticleContainer = styled.a`
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
