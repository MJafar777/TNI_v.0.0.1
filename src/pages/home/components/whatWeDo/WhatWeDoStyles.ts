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
`;

export const WhatWeDoLeft = styled.div`
  max-width: 1151px;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin: 0 auto;
`;

export const WhatWeDoRight = styled.div`
  position: absolute;
`;

export const WhatWeDoWelcome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
`;

export const WhatWeDoTitle = styled.h2`
  color: #fff;
  font-family: Mazzard;
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1.12px;
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
`;
