import styled from "styled-components";

export default styled.div`
  pre {
    font-family: unset !important;
    color: unset !important;
    margin-top: unset !important;
    margin-bottom: unset !important;
    font-size: 1em;
    font-weight: 100;
    color: #fcf5ed !important;
    white-space: pre-wrap;
    padding-top: 10px;
    padding-right: 50px;
    padding-left: 50px;
  }

  .button {
    color: #000529 !important;
    background-color: var(--accent1);
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  #set-height {
    display: inline-block;
  }

  .upload-container {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    position: relative;
  }
  .upload-container input {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #92b0b3;
    background: #f1f1f1;
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    border-radius: 5px;
    padding: 10% 30% 15% 25%;
  }

  .upload-container input:hover {
    background: #ddd;
  }

  .upload-container:before {
    position: relative;
    position: absolute;
    top: 55%;
    left: 20%;
    right: 20% !important;
    text-align: center !important;
    content: " (or) Drag and Drop files here. ";
    color: #3f8188;
    font-weight: 900;
  }

  .container {
    position: sticky;
    z-index: 1;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    grid-auto-rows: minmax(10px, auto);
    padding-bottom: 200px;
  }

  .jobs-thankyou {
    position: sticky;
    z-index: 1;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    display: grid;
    padding-bottom: 200px;
  }
  .thank-you {
    text-align: center;
    font-weight: 200;
    color: #8b8b8b;
    font-size: 4em;
    font-weight: 200;
    font-size: 2em;
    margin-top: 240px;
  }
  .jobs-title {
    font-weight: 200;
    color: #8b8b8b;
    font-size: 4em;
    grid-column: 1 / 3;
    grid-row: 1;
    margin-top: 240px;
    margin-left: 40px;
    z-index: 0;
    border-radius: 5px;
    text-decoration: none;
  }
  .jobs-list {
    grid-column: 1 / 3;
    position: relative;
    height: 75px;
    z-index: 0;
    border-radius: 5px;
    text-decoration: none;
  }
  .jobs-list-item1 {
    grid-column: 1 / 3;
    grid-row: 2;
    position: relative;
    height: 75px;
    z-index: 0;
    border-radius: 5px;
    text-decoration: none;
  }
  .jobs-list a {
    text-decoration: none;
    /* color: black; */
  }
  .jobs-list-item2 {
    grid-column: 1 / 3;
    grid-row: 3;
    margin-top: 20px;
    position: relative;
    height: 75px;
    z-index: 0;
    border-radius: 5px;
    text-decoration: none;
  }
  .jobs {
    border: none;
    padding: 10px 50px 10px 50px;
    border-radius: 5px;
    float: right;
    right: 20px;
    position: relative;
    top: 10px;
    text-decoration: none;
    font-size: 1.4em;
    margin: 4px 2px;
    cursor: pointer;
  }

  .jobs a {
    text-decoration: none;
  }

  h2 {
    font-size: 2em !important;
    display: inline-block;
    padding: 20px 50px 0px 50px;
    margin: 0;
  }

  h3 {
    font-size: 1.5em;
    padding: 20px 50px 0px 50px;
    margin: 0;
  }

  h4 {
    font-size: 1.1em;
    /* color: black; */
    padding: 20px 50px 0px 50px;
    margin: 0;
  }

  h5 {
    font-size: 1.5em;
    /* color: black; */
    margin: 0px;
    position: relative;
    float: left;
    left: 20px;
    top: 20px;
    width: 75%;
  }

  p {
    font-size: 1em;
    padding-top: 10px;
    padding-right: 50px;
    padding-left: 50px;
    margin: 0;
    margin-top: 0;
  }

  ul {
    list-style-type: circle;
    font-size: 1em;
    padding-left: 70px;
    padding-right: 50px;

    ul {
      list-style-type: disc;
      font-size: 1em;
      padding-left: 40px;
      padding-right: 0px;
    }
  }

  .jobs-content-block {
    grid-column: 1;
    grid-row: 1;
    margin-top: 250px;
    margin-left: 20px;
    z-index: 0;
    border-radius: 5px;
  }

  .apply-form {
    float: right;
    grid-column: 2;
    grid-row: 1;
    position: sticky;
    top: 250px;
    height: 520px;
    margin-right: 20px;
    border-radius: 5px;
  }

  .grid-container {
    padding: 20px 50px 20px 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(20px, auto);
  }

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  input::placeholder {
    color: var(--text-light);
    opacity: 1;
  }
  input::placeholder {
    color: var(--text-light);
    opacity: 1;
  }

  .fname {
    grid-column: 1;
    grid-row: 1;
  }

  .lname {
    grid-column: 2;
    grid-row: 1;
  }

  .phone {
    grid-column: 1/3;
    grid-row: 2;
  }

  .email {
    grid-column: 1/3;
    grid-row: 3;
  }

  .letter {
    width: 100%;
    height: 70px;
    resize: none;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 12px 20px;
  }

  .cover-letter {
    grid-column: 1 / 3;
    grid-row: 5;
  }

  .button {
    grid-column: 1 / 3;
    grid-row: 5;
    font-size: 1em;
    text-align: center;
    color: white;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    top: -5px;
  }

  .button:hover {
    /* background: #ddd; */
  }
  #fileElem {
    display: none;
  }
  .submit {
    grid-column: 1/3;
    grid-row: 6;
    height: 50px;
  }

  .apply-form-container {
    color: white;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  .one {
    grid-column: 1;
    grid-row: 1;
    padding: 10px;
  }
  .two {
    grid-column: 2;
    grid-row: 1;
    padding: 10px;
  }
  .three {
    grid-column: 3;
    grid-row: 1;
    padding: 10px;
  }
  .four {
    grid-column: 1;
    grid-row: 2;
    padding: 10px;
    /* background-color: #c6d7de; */
  }
  .five {
    grid-column: 2;
    grid-row: 2;
    padding: 10px;
    /* background-color: #c6d7de; */
  }
  .six {
    grid-column: 3;
    grid-row: 2;
    padding: 10px;
    /* background-color: #c6d7de; */
  }

  .content-block-1 {
    position: sticky;
    position: -webkit-sticky;
    padding: 15%;
    height: 1000px;
  }
  .content-block-2 {
    position: sticky;
    position: -webkit-sticky;
    padding: 15%;
    height: 1000px;
  }
  .content-block-3 {
    position: sticky;
    position: -webkit-sticky;
    padding: 15%;
    height: 1000px;
  }
  .content-block-4 {
    position: sticky;
    position: -webkit-sticky;
    padding: 15%;
    height: 1000px;
  }
  .content-block-5 {
    position: sticky;
    position: -webkit-sticky;
    padding: 15%;
    height: 1000px;
  }
  .content-block-6 {
    position: sticky;
    position: -webkit-sticky;
    padding: 15%;
    height: 1000px;
  }

  @media only screen and (max-height: 600px) {
    .header {
      height: 60px;
      background-size: cover;
    }
    h1 {
      font-size: 2em;
      margin-top: 15px;
      margin-bottom: 0px;
      line-height: 10px;
    }
    h2 {
      font-size: 1.5em !important;
    }
    h6 {
      font-size: 0.6em;
    }
    .nav {
      height: 50%;
      width: 100%;
    }
    .transition-top {
      margin-top: 60px;
      height: 20px;
    }
    .jobs-content-block {
      margin-top: 80px;
    }
    .transition-bottom {
      height: 20px;
      bottom: 60px;
    }
    .footer {
      height: 40px;
      padding-bottom: 10px;
    }
    .footer-text {
      font-size: 0.5em;
    }
    .svg {
      padding-left: 3px;
      padding-right: 3px;
      width: 15px;
      height: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    .header {
      height: 100px;
      background-size: cover;
    }
    .transition-top {
      margin-top: 100px;
      height: 20px;
    }
    h1 {
      margin-top: 25px;
      margin-bottom: 0px;
      line-height: 30px;
    }
    h6 {
      font-size: 0.8em;
    }
    .btn {
      font-size: 1em;
      padding: 0px;
    }
    .container {
      grid-template-columns: 1fr;
      gap: 0px;
    }

    .grid-container {
      padding: 20px 15px 20px 15px;
    }

    .jobs-title {
      font-weight: 200;
      font-size: 2em;
      margin-top: 150px;
      margin-left: 40px;
    }
    .jobs-list {
      margin-top: 20px;
      height: 100px;
      top: 20px;
    }
    .jobs {
      padding: 10px 20px 10px 20px;
      right: 20px;
      top: 25px;
      font-size: 1em;
    }
    .jobs-content-block {
      margin-top: 120px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 1.2em !important;
      padding-left: 20px;
      padding-right: 20px;
    }
    h3 {
      padding-left: 20px;
      padding-right: 20px;
      font-size: 1em;
      top: 15px;
      width: 60%;
    }
    h4 {
      padding-left: 20px;
      padding-right: 20px;
      font-size: 1em;
    }
    h5 {
      top: 15px;
      width: 60%;
      font-size: 1.2em;
    }
    p {
      padding-left: 20px;
      padding-right: 10px;
    }
    ul {
      padding-left: 40px;
      padding-right: 10px;

      ul {
        padding-left: 20px;
        padding-right: 10px;
      }
    }

    .apply-form {
      grid-column: 1;
      grid-row: 2;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
