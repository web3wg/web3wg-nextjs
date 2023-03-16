import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    font-family: "Gotham", sans-serif;

    --text-dark: #fcf5ed;
    --accent1-dark: #fcee21;
    --accent2-dark: #e10d8c;
    --accent3-dark: #00ffce;
    --bkgimg-dark: url("/images/grid_bottom.png") no-repeat center bottom;
    --bkg1-dark: #000529;
    --bkg2-dark: #000210;
    --bkg3-dark: rgba(0, 0, 0, 0.5);
    --shadow-dark: #6c7090;

    --text-light: #000529;
    --accent1-light: #e10d8c;
    --accent2-light: #fcee21;
    --accent3-light: #00ffce;
    --bkgimg-light: url("/images/grid_bottom.png") no-repeat center bottom;
    --bkg1-light: #f1f1f1;
    --bkg2-light: #fcf5ed;
    --bkg3-light: rgba(241, 241, 241, 0.5);
    --shadow-light: #656279;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --text: var(--text-dark);
      --bkg1: var(--bkg1-dark);
      --bkg2: var(--bkg2-dark);
      --bkg3: var(--bkg3-dark);
      --accent1: var(--accent1-dark);
      --shadow: var(--shadow-dark);
    }

    .bg-light {
      background-color: var(--bkg1-dark) !important;
    }

    .logo-light {
      display: none;
    }
  }

  .loading-animation {
    position: fixed;
    object-fit: cover;
    left: 0;
    bottom: 0;
    width: 100vw;
  }

  html {
    height: 100%;
  }

  body {
    background: var(--bkg1);
    color: var(--text);
    padding: 0px;
  }

  body::after {
    content: "";
    opacity: 0;
  }

  section {
    z-index: 1;
    position: relative;
    padding: 3em;
  }
  .scrollytellingcontainer {
    width: 50%;
    text-align: right;
    left: unset !important;
    margin-left: auto;
    margin-right: 0;
  }
  .scrollytellingcontainerLast {
    padding-top: 20%;
    width: 100%;
    text-align: center;
    left: 0%;
  }
  .scrollytellingcontent {
    position: sticky;
    position: -webkit-sticky;
    top: 40%;
  }

  h1 {
    font-family: 'GothamThin', sans-serif;
    display: inline-block;
    text-transform: uppercase;
    font-size: 2.4em;
    line-height: normal;
    width: 100%;
    padding: 0px;
    border-radius: 5px 5px 0px 0px;
    margin: 0;

    .span-block {
      display: inline-block;
      font-size: 2.2rem;
      padding-right: 12px;
    }

    .custom-gradient {
      font-family: 'GothamUltraItalic', sans-serif;
      display: inline-block;
      background-clip: text;
      padding-right: 12px;
      font-size: 3.2rem;
      margin: 0px;
      text-shadow: none;
      -webkit-background-clip: text;
      background-image: -webkit-linear-gradient(135deg, rgba(252,238,33,1) 0%, rgba(225,13,140,1) 50%, rgba(255,96,191,1) 100%);
      color: transparent;
    }
  }

  p {
    text-transform: uppercase;
    font-size: 3.6em;
    line-height: 0.75em;
    width: 100%;
    padding-top: 20px;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 0px 0px 5px 5px;
    text-shadow: 2px 2px 5px var(--bkg3);
    margin-bottom: 70%;
  }

  .scroll-text {
    position: relative;
    font-family: 'GothamThin', sans-serif;
    text-transform: none;
    display: inline-block;
    font-size: 1rem;
    font-weight: 100;
    width: fit-content;
    border-radius: 20px;
    border: 1px #e10d8c solid;
    padding: 5px 15px;
    padding-right: 35px;
    opacity: 0.8;
    margin: 20px 12px;

    &::after {
      content: "";
      position: absolute;
      top: 5px;
      right: 5px;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-right: 0.2em solid #e10d8c;
      border-top: 0.2em solid #e10d8c;
      transform: rotate(135deg);
      margin-right: 0.5em;
      margin-left: 1.0em;
    }
  }

  section:nth-of-type(1) {
    /* era defining */
    height: 140vh;
    width: 38%;
    margin-bottom: 30%;

    .span-block {
      font-size: 2.4rem;
    }

    .custom-gradient {
      font-size: 3.2rem;
    }
  }

  section:nth-of-type(2) {
    /* printing press */
    height: 170vh;
    width: 33%;
  }

  section:nth-of-type(3) {
    /* telephone telegraph */
    height: 200vh;
    width: 47%;
  }

  section:nth-of-type(4) {
    /* broadcast */
    height: 240vh;
    width: 46%;
  }

  section:nth-of-type(5) {
    /* internet */
    height: 190vh;
    width: 30%;

    .custom-gradient {
      font-size: 2.4rem;
    }
  }

  section:nth-of-type(6) {
    /* centralized web2 */
    height: 200vh;
    width: 47%;
  }

  section:nth-of-type(7) {
    /* decentralized web3 */
    height: 150vh;
    width: 38%;
  }

  section:nth-of-type(8) {
    /* decentralized web3 */
    width: 100%;

    a {
      display: block;
      font-family: 'Gotham', sans-serif;
      margin-top: 15px;
    }
  }

  .entered {
    -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.15, 1, 0.25) both;
    animation: text-focus-in 1.5s cubic-bezier(0.55, 0.15, 1, 0.25) both;
  }

  @media (orientation: landscape) {
    canvas {
      position: fixed;
      object-fit: cover;
      /* z-index: 0; */
      left: 0;
      bottom: 0;
      width: 100vw;
    }
  }

  @media (orientation: portrait) {
    canvas {
      position: fixed;
      object-fit: cover;
      left: 0;
      bottom: 0%;
      height: 100%;
    }

    .scrollytellingcontainer {
      width: 100% !important;
      text-align: center;
      left: 0%;
    }
    .scrollytellingcontainerX {
      width: 100% !important;
      text-align: center;
      left: 0%;
    }

    h1 {
      font-size: 4em;
    }

    p {
      font-size: 5.2em;
      line-height: 0.85em;
    }

    .scrollytellingcontent {
      top: 25%;

      .span-block, .custom-gradient {
        padding-right: 0px;
        padding: 0px 5px;
      }
    }

    .scrollytellingcontainerLast {
      h1 {
        margin-bottom: 50% !important;
      }
    }
  }

  @media (max-height: 800px) and (orientation: portrait) {
    section {
      text-align: center;
    }

    .scrollytellingcontent {
      top: 25%;
    }

    h1 {
      font-size: 1.6em;
    }

    p {
      font-size: 1.1em;
    }
  }

  @media (min-width: 2560px) {
    section {
      .scrollytellingcontent {
        .span-block {
          font-size: 4.8rem !important;
        }

        .custom-gradient {
          font-size: 6rem !important;
        }
      }
    }

    .button {
      padding: 30px 42px;
      font-size: 0.8em;
    }
  }

  @media (min-width: 1920px) {
    section {
      .span-block {
        font-size: 2.6rem !important;
      }

      .custom-gradient {
        font-size: 3.4rem !important;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1499px) {
    section:nth-of-type(1) {
      /* era defining */
      width: 54%;
    }

    section:nth-of-type(2) {
      /* printing press */
      width: 42%;
    }

    section:nth-of-type(3) {
      /* telephone telegraph */
      width: 47%;
    }

    section:nth-of-type(4) {
      /* broadcast */
      width: 46%;
    }

    section:nth-of-type(5) {
      /* internet */
      width: 46%;
    }

    section:nth-of-type(6) {
      /* centralized web2 */
      width: 47%;
    }

    section:nth-of-type(7) {
      /* decentralized web3 */
      width: 54%;
    }
  }

  @media (max-width: 1023.98px) and (orientation: landscape) {
    body {
      padding: 0px;
      padding-top: 62px;
    }

    h1 {
      font-size: 2em;
    }

    p {
      font-size: 2.3em;
      line-height: 0.85em;
    }

    .navbar {
      padding: 0 1rem;
    }

    .navbar img {
      width: 56px;
      height: 56px;
    }

    .navbar-toggler {
      font-size: 0.85rem;
    }

    canvas {
      width: 100%;
    }

    .scrollytellingcontent {
      top: 25%;
    }

    .scrollytellingcontainerLast {
      .scrollytellingcontent {
        top: 0%;
      }

      h1 {
        margin-bottom: 0px !important;
      }
    }

    section {
      padding: 0.5em;

      .span-block {
        font-size: 1.0rem !important;
      }

      .custom-gradient {
        font-size: 1.4rem !important;
      }
    }
  }

  @media (min-width: 1024px) and (max-height: 820px) and (orientation: landscape) and (max-width: 1279.98px){
    section {
      &:nth-of-type(5) {
        width: 38%;
      }

      .span-block {
        font-size: 1.6rem !important;
      }

      .custom-gradient {
        font-size: 2.0rem !important;
      }
    }
  }

  @media (max-width: 575.98px) {
    body {
      padding: 0px;
    }

    section {
      padding: 1.5em;

      .span-block {
        font-size: 1.2rem !important;
      }

      .custom-gradient {
        font-size: 1.8rem !important;
      }
    }

    .button {
      padding: 15px 16px;
    }
  }

  @media (min-height: 799.98px) and (orientation: portrait) {
    body {
      padding: 0px;
    }

    section {
      padding: 1.5em;

      h1 {
        line-height: 1.4rem;

        .span-block {
          font-size: 1.2rem !important;
        }

        .custom-gradient {
          font-size: 1.8rem !important;
        }
      }
    }

    .button {
      padding: 15px 16px;
    }
  }

  /* ----------------------------------------------
 * Generated by Animista on 2018-7-4 16:24:12
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation text-focus-in
 * ----------------------------------------
 */
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }

    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }

    80% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0.2;
    }

    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;
