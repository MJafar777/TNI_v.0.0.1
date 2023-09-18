import styled from "styled-components";
import { Banner2 } from "../../../../assets/images/about";

export const ShortInfoWrapper = styled.div`
  padding-top: 63px;
`;
export const Container = styled.div`
  width: 100%;
  padding: 0 135px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 25px;
`;

export const Title = styled.p`
  color: #000;
  font-size: 56px;
  text-align: left;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.12px;
  font-family: "MazzardM-Bold";
`;

export const Text = styled.p`
  text-align: justify;
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 168.2%; /* 26.912px */
  letter-spacing: 1.12px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Banner = styled.div`
  background-image: url(${Banner2});
  width: 100%;
  height: 513px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 25px 0;
`;
