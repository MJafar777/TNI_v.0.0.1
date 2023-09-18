import { createGlobalStyle } from "styled-components";
import MazzardMBold from "../assets/fonts/MazzardM-Bold.ttf";
import MazzardMRegular from "../assets/fonts/MazzardM-Regular.ttf";
import MazzardMMedium from '../assets/fonts/MazzardM-Medium.ttf'
const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: "MazzardM-Regular";
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

  @font-face {
    font-family: "MazzardM-Bold";
    src: url(${MazzardMBold}) format("truetype");
  }

  @font-face {
    font-family:'MazzardM-Regular' ;
    src: url(${MazzardMRegular}) format("truetype");
  }

  @font-face {
    font-family:'MazzardM-Medium' ;
    src: url(${MazzardMMedium}) format("truetype");
  }

  a {
    text-decoration: none;
  }
  
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
