import styled from "styled-components";
import { bgHeaderOfAbout } from "../../../../assets/images/about";

export const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 50vh;
  background-image: url(${bgHeaderOfAbout});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 50px;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    86% 85%,
    66% 85%,
    53% 100%,
    36% 87%,
    16% 89%,
    0 99%
  );
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const TopTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    width: 70px;
    height: 1px;
    background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.24px;
  font-family: "MazzardM-Regular";
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 5.6px;
  font-family: "MazzardM-Bold";
`;

export const BorderBottom = styled.div`
  width: 115.915px;
  height: 2px;
  background-color: #029ecf;
`;
