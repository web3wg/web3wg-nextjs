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

    a {
      text-transform: capitalize;
    }
  }
`;
