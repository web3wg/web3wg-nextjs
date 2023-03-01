import styled from 'styled-components';

export default styled.footer`
  position: fixed;
  height: 60px;
  width: 100%;
  z-index: 2;
  padding-top: 10px;
  bottom: 0;
  text-align: center;
  font-weight: 100;
  line-height: 1.1;
  background-color: var(--bkg3);
  background-size: cover;

  &.static-bottom {
    position: relative;
    background: none;
  }

  .footer-text {
    font-size: 1.1em;
    color: var(--text);
  }
`;
