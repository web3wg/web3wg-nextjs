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
      font-family: "Montserrat", sans-serif;
      text-transform: capitalize;
      transition: 0.4s;
      font-weight: 700;
      cursor: pointer;

      &.current-page {
        color: #e1058c;
      }

      &:hover {
        filter: brightness(1.2);
        color: #e1058c !important;
      }
    }

    .main-logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo-container {
      position: relative;
      height: 80px;
      width: 80px;
      z-index: 15;
    }
  }

  @media (min-width: 992px) {
    nav {
      .main-logo {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
`;
