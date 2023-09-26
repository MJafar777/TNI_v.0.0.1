import { createGlobalStyle } from "styled-components";

import LexandMedium from "../assets/fonts/Lexend-Medium.ttf";
import LexandRegular from "../assets/fonts/Lexend-Regular.ttf";

import MazzardMBold from "../assets/fonts/MazzardM-Bold.ttf";
import MazzardMMedium from "../assets/fonts/MazzardM-Medium.ttf";
import MazzardMRegular from "../assets/fonts/MazzardM-Regular.ttf";
import MazzardMLightItalic from "../assets/fonts/MazzardM-LightItalic.ttf";

const GlobalStyles = createGlobalStyle`

  @font-face {
  font-family: Mazzard;
  src: url(${MazzardMRegular}) format("truetype");

  @font-face {
    font-family: "Lexand-Regular";
    src: url(${LexandRegular}) format("truetype"); 
  }

  @font-face {
    font-family: "Lexand-Medium";
    src: url(${LexandMedium}) format("truetype");
  }

  @font-face {
    font-family: "MazzardM-Bold";
    src: url(${MazzardMBold}) format("truetype");
  }

  @font-face {
    font-family: "MazzardM-LigthItalic";
    src: url(${MazzardMLightItalic}) format("truetype");
  }

  @font-face {
    font-family:'MazzardM-Regular' ;
    src: url(${MazzardMRegular}) format("truetype");
  }

  @font-face {
    font-family:'MazzardM-Medium' ;
    src: url(${MazzardMMedium}) format("truetype");
  }

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
