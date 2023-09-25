import styled from "styled-components";

interface Props {
  fontSize: number | string;
}

export const MiniTitleWrapper = styled.p<Props>`
  font-size: ${(e) => (e.fontSize ? e.fontSize : 38)}px;

  color: #060709;
  font-weight: 700;
  line-height: 120%;
  font-style: normal;
  letter-spacing: 2px;
  font-family: Mazzard;

  @media only screen and (max-width: 1200px) {
    font-size: ${(e) => (e.fontSize ? Number(e.fontSize) - 2 : 36)}px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: ${(e) => (e.fontSize ? Number(e.fontSize) - 8 : 32)}px;
  }

  @media only screen and (max-width: 800px) {
    font-size: ${(e) => (e.fontSize ? Number(e.fontSize) - 12 : 32)}px;
  }

  @media only screen and (max-width: 700px) {
    font-size: ${(e) => (e.fontSize ? Number(e.fontSize) - 14 : 32)}px;
  }

  @media only screen and (max-width: 600px) {
    font-size: ${(e) => (e.fontSize ? Number(e.fontSize) - 18 : 32)}px;
  }

  @media only screen and (max-width: 500px) {
    font-size: ${(e) => (e.fontSize ? Number(e.fontSize) - 22 : 32)}px;
  }
`;
