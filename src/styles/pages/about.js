import styled from "styled-components";

export default styled.div`
  .embed-responsive {
    border-radius: 12px;
    padding: 20px;
    max-width: 720px;
    margin: auto;

    .embed-responsive-item {
      padding: 16px;
      border: 1px solid #fff;
      border-radius: 12px;

      & video {
        border-radius: 12px;
      }
    }
  }

  pre {
    font-family: unset !important;
    color: unset !important;
    margin-top: unset !important;
    margin-bottom: unset !important;
    font-size: 14pt;
    font-weight: 100;
    color: #fcf5ed !important;
    white-space: pre-wrap;
  }

  #mc_embed_signup {
    width: 100%;
  }
  #mc-embedded-subscribe-form input[type="checkbox"] {
    display: inline !important;
    width: auto !important;
    margin-right: 10px !important;
  }
  #mergeRow-gdpr {
    margin-top: 20px;
  }
  #mergeRow-gdpr fieldset label {
    font-weight: normal;
  }
  #mc-embedded-subscribe-form .mc_fieldset {
    border: none;
    min-height: 0px;
    padding-bottom: 0px;
  }

  #mc_embed_signup form {
    display: block;
    position: relative;
    text-align: center;
    margin: 20px;
  }
  #mc_embed_signup h2 {
    font-weight: bold;
    padding: 0;
    margin: 15px 0;
    font-size: 1.4em;
  }
  #mc_embed_signup input {
    border: 1px solid #abb0b2;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  #mc_embed_signup input[type="checkbox"] {
    -webkit-appearance: checkbox;
  }
  #mc_embed_signup input[type="radio"] {
    -webkit-appearance: radio;
  }
  #mc_embed_signup input:focus {
    border-color: #333;
  }
  #mc_embed_signup .button {
    clear: both;
    background-color: #aaa;
    border: 0 none;
    border-radius: 4px;
    transition: all 0.23s ease-in-out 0s;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    font-weight: normal;
    height: 32px;
    line-height: 32px;
    margin: 0 5px 10px 0;
    padding: 0 22px;
    text-align: center;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
    width: fit-content;
    width: -moz-fit-content;
  }
  #mc_embed_signup .button:hover {
    background-color: #777;
  }
  #mc_embed_signup .small-meta {
    font-size: 11px;
  }
  #mc_embed_signup .nowrap {
    white-space: nowrap;
  }

  #mc_embed_signup .mc-field-group {
    clear: left;
    position: relative;
    width: 96%;
    padding-bottom: 3%;
    min-height: 50px;
    display: grid;
  }
  #mc_embed_signup .size1of2 {
    clear: none;
    float: left;
    display: inline-block;
    width: 46%;
    margin-right: 4%;
  }
  * html #mc_embed_signup .size1of2 {
    margin-right: 2%; /* Fix for IE6 double margins. */
  }
  #mc_embed_signup .mc-field-group label {
    display: block;
    margin-bottom: 3px;
  }
  #mc_embed_signup .mc-field-group input {
    display: block;
    width: 100%;
    padding: 8px 0;
    text-indent: 2%;
  }
  #mc_embed_signup .mc-field-group select {
    display: inline-block;
    width: 99%;
    padding: 5px 0;
    margin-bottom: 2px;
  }
  #mc_embed_signup .mc-address-fields-group {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 96%;
    gap: 15px;
  }

  #mc_embed_signup .datefield,
  #mc_embed_signup .phonefield-us {
    padding: 5px 0;
  }
  #mc_embed_signup .datefield input,
  #mc_embed_signup .phonefield-us input {
    display: inline;
    width: 60px;
    margin: 0 2px;
    letter-spacing: 1px;
    text-align: center;
    padding: 5px 0 2px 0;
  }
  #mc_embed_signup .phonefield-us .phonearea input,
  #mc_embed_signup .phonefield-us .phonedetail1 input {
    width: 40px;
  }
  #mc_embed_signup .datefield .monthfield input,
  #mc_embed_signup .datefield .dayfield input {
    width: 30px;
  }
  #mc_embed_signup .datefield label,
  #mc_embed_signup .phonefield-us label {
    display: none;
  }

  #mc_embed_signup .indicates-required {
    text-align: right;
    font-size: 11px;
    margin-right: 4%;
  }
  #mc_embed_signup .asterisk {
    color: #e85c41;
    font-size: 150%;
    font-weight: normal;
    position: relative;
    top: 5px;
  }
  #mc_embed_signup .clear {
    clear: both;
  }
  #mc_embed_signup .foot {
    display: grid;
    grid-template-columns: 3fr 1fr;
    width: 96%;
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    #mc_embed_signup .foot {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      align-items: center;
    }
  }

  @media screen and (max-width: 400px) {
    #mc_embed_signup .referralBadge {
      width: 50%;
    }
  }

  #mc_embed_signup .brandingLogo {
    justify-self: right;
  }
  @media screen and (max-width: 400px) {
    #mc_embed_signup .brandingLogo {
      justify-self: left;
    }
  }

  #mc_embed_signup .mc-field-group.input-group ul {
    margin: 0;
    padding: 5px 0;
    list-style: none;
  }
  #mc_embed_signup .mc-field-group.input-group ul li {
    display: block;
    padding: 3px 0;
    margin: 0;
  }
  #mc_embed_signup .mc-field-group.input-group label {
    display: inline;
  }
  #mc_embed_signup .mc-field-group.input-group input {
    display: inline;
    width: auto;
    border: none;
  }

  #mc_embed_signup div#mce-responses {
    float: left;
    top: -1.4em;
    padding: 0em 0.5em 0em 0.5em;
    overflow: hidden;
    width: 90%;
    margin: 0 5%;
    clear: both;
  }
  #mc_embed_signup div.response {
    margin: 1em 0;
    padding: 1em 0.5em 0.5em 0;
    font-weight: bold;
    float: left;
    top: -1.5em;
    z-index: 1;
    width: 80%;
  }
  #mc_embed_signup #mce-error-response {
    display: none;
  }
  #mc_embed_signup #mce-success-response {
    color: #529214;
    display: none;
  }
  #mc_embed_signup label.error {
    display: block;
    float: none;
    width: auto;
    margin-left: 1.05em;
    text-align: left;
    padding: 0.5em 0;
  }
  #mc_embed_signup .helper_text {
    color: #8d8985;
    margin-top: 2px;
    display: inline-block;
    padding: 3px;
    background-color: rgba(255, 255, 255, 0.85);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: normal;
    z-index: 1;
  }

  #mc-embedded-subscribe {
    clear: both;
    width: auto;
    display: block;
    background: #e1058c;
    border: none;
    box-shadow: -12px 16px 38px rgba(237, 7, 143, 0.3);
    border-radius: 22px;
    padding: 12px 28px;
    cursor: pointer;
    transition: 0.4s;
    color: #fff;
    margin: auto;

    &:hover {
      transform: scale(0.95);
      box-shadow: -12px 0px 38px rgba(237, 7, 143, 0.3);
    }
  }
  #mc_embed_signup #num-subscribers {
    font-size: 1.1em;
  }
  #mc_embed_signup #num-subscribers span {
    padding: 0.5em;
    border: 1px solid #ccc;
    margin-right: 0.5em;
    font-weight: bold;
  }

  #mc_embed_signup #mc-embedded-subscribe-form div.mce_inline_error {
    display: inline-block;
    margin: 2px 0 1em 0;
    padding: 3px;
    background-color: rgba(255, 255, 255, 0.85);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: normal;
    z-index: 1;
    color: #e85c41;
  }
  #mc_embed_signup #mc-embedded-subscribe-form input.mce_inline_error {
    border: 2px solid #e85c41;
  }
`;

export const MemberContainer = styled.div`
  padding: 24px;

  .member-inner-container {
    display: flex;
    padding: 12px;
    gap: 18px;
    background-color: #060b2f;
    box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.41);
    border-radius: 12px;
    margin-bottom: 20px;
    z-index: 1;

    &.alternate-color {
      .inner-container {
        img {
          border-color: #fcee21 !important;
        }
      }
    }

    .inner-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;

      .image-container {
        position: relative;

        img {
          border-radius: 12px;
          border-left: 4px solid #e1058c;
        }
      }

      h3 {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 0px;
      }

      h4 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0px;
        color: #e1058c;
      }

      pre {
        margin-top: 4px !important;
        font-size: 0.8rem;
        font-weight: 300;
        color: #f8f8f8 !important;
      }
    }
  }

  @media (max-width: 767.98px) {
    padding: 0px;
  }
`;
