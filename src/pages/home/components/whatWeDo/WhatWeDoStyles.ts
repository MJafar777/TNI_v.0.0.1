import { styled } from "styled-components";

import { WhatWeDoBack } from "../../../../assets/images";

export const WhatWeDoWrapper = styled.section`
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 650px;
  margin: 85px auto;

  background-image: url(${WhatWeDoBack});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .whatWeDoBtn {
    margin-top: 40px;
  }

  clip-path: polygon(
    34% 8%,
    18% 8%,
    0 0,
    0 93%,
    20% 91%,
    50% 100%,
    68% 92%,
    85% 92%,
    100% 100%,
    100% 7%,
    80% 9%,
    50% 0
  );

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    min-height: 400px;
    margin: 25px auto;

    video {
      display: none;
    }

    .whatWeDoBtn {
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const WhatWeDoLeft = styled.div`
  max-width: 1151px;
  width: 50%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin: 0 auto;
  padding: 20px;
  padding-left: 10%;

  @media ${(props) => props.theme.breakpoints.xxl} {
    padding-left: 2%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WhatWeDoRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    clip-path: polygon(46% 0, 77% 0, 48% 100%, 16% 100%);
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const WhatWeDoWelcome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 8px;
  }

  @media screen and (max-width: 700px) {
    justify-content: center;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const WhatWeDoWelcomeRow = styled.div`
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
`;

export const WhatWeDoWelcomeText = styled.p`
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 4.24px;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const WhatWeDoTitle = styled.h2`
  color: #fff;
  font-family: Mazzard;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1.12px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.76px;
    margin: 10px 0;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;

export const WhatWeDoDesc = styled.p`
  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-weight: 400;
  line-height: 168.2%; /* 26.912px */
  letter-spacing: 1.12px;
  max-width: 480px;
  margin-bottom: 0px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    font-size: 14px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    max-width: 100%;

    padding: 0 10px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
`;
