import styled from "styled-components";

export default styled.footer`
  position: fixed;
  width: 100%;
  z-index: 2;
  padding: 10px 0px;
  bottom: 0;
  text-align: center;
  font-weight: 100;
  line-height: 1.1;
  background-color: var(--bkg3);
  background-size: cover;
  backdrop-filter: blur(2px);

  &.static-bottom {
    position: relative;
    background: none;
  }

  .footer-icons {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 5px;
  }

  .footer-text {
    font-size: 1.1em;
    color: var(--text);
  }
`;
