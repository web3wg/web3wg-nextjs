import styled from "styled-components";

export default styled.header`
  nav {
    z-index: 10;

    &.sticky-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }

    &.custom-transparent {
      background-color: rgba(0, 5, 41, 0.5) !important;
      backdrop-filter: blur(2px);
    }

    a {
      text-transform: capitalize;
    }

    .logo-container {
      position: relative;
      height: 80px;
      width: 80px;
      z-index: 15;
    }
  }
`;
