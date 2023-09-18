import { createGlobalStyle } from "styled-components";

import MazzardMRegular from "../assets/fonts/MazzardM-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: Mazzard;
  src: url(${MazzardMRegular}) format("truetype");
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arial", "Times-new-roman";
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-size: 10px;
    cursor: default;
  }

  a {
    text-decoration: none;
  }
  
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
