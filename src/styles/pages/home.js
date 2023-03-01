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
    /* height: 1125vh; */
    color: var(--text);
    padding: 3em;
  }

  body::after {
    content: "";
    opacity: 0;
  }

  section {
    z-index: 1;
    position: relative;
  }
  .scrollytellingcontainer {
    width: 50%;
    text-align: right;
    left: 50%;
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
    top: 50%;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.7em;
    line-height: 0.9em;
    width: 100%;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px 5px 0px 0px;
    margin: 0;
    text-shadow: 2px 2px 5px var(--bkg3);
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

  i {
    display: block;
    color: var(--shadow);
    font-size: 1.2em;
    font-weight: 100;
    width: 100%;
    padding: 0 15px;
    margin-top: 45px;
    padding-bottom: 70%;
  }

  section:nth-of-type(1) {
    /* era defining */
    height: 130vh;
  }

  section:nth-of-type(2) {
    /* printing press */
    height: 170vh;
  }

  section:nth-of-type(3) {
    /* telephone telegraph */
    height: 140vh;
  }

  section:nth-of-type(4) {
    /* broadcast */
    height: 200vh;
  }

  section:nth-of-type(5) {
    /* internet */
    height: 130vh;
  }

  section:nth-of-type(6) {
    /* centralized web2 */
    height: 150vh;
  }

  section:nth-of-type(7) {
    /* decentralized web3 */
    height: 80vh;
  }

  .entered {
    -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.15, 1, 0.25) both;
    animation: text-focus-in 1.5s cubic-bezier(0.55, 0.15, 1, 0.25) both;
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

    /* section { */
    /* width: 100%; */
    /* text-align: center; */
    /* left: 0%; */
    /* } */

    .scrollytellingcontainer {
      width: 100%;
      text-align: center;
      left: 0%;
    }
    .scrollytellingcontainerX {
      width: 100%;
      text-align: center;
      left: 0%;
    }

    h1 {
      font-size: 4em;
    }

    p {
      font-size: 5.2em;
      line-height: 0.85em;
      /* margin-bottom: 70%; */
    }

    .scrollytellingcontent {
      top: 10%;
    }
  }

  @media (max-height: 800px) and (orientation: portrait) {
    section {
      text-align: center;
    }

    .scrollytellingcontent {
      top: 15%;
    }

    h1 {
      font-size: 1.6em;
    }

    p {
      font-size: 1.1em;
    }
  }

  @media (min-width: 3000px) {
    h1 {
      font-size: 6em;
      text-shadow: 5px 5px 10px var(--bkg3);
    }

    p {
      font-size: 6em;
      text-shadow: 5px 5px 10px var(--bkg3);
    }

    .button {
      padding: 30px 42px;
      font-size: 0.8em;
    }
  }

  @media (max-width: 1023.98px) and (orientation: landscape) {
    body {
      padding: 0.5em;
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
    }

    .navbar-toggler {
      font-size: 0.85rem;
    }

    canvas {
      width: 100%;
    }
  }

  @media (min-width: 1024px) and (max-height: 820px) and (orientation: landscape) {
    h1 {
      font-size: 3em;
    }

    p {
      font-size: 3.4em;
      line-height: 0.85em;
    }
  }

  @media (max-width: 575.98px) {
    .button {
      padding: 15px 16px;
    }
  }
`;
