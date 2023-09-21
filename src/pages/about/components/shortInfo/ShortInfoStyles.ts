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

  @media screen and (max-width: 992px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 60px;
  }

  @media screen and (max-width: 576px) {
    padding: 0 40px;
  }
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
  /* background-image: url(${Banner2}); */
  position: relative;
  width: 100%;

  video::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }

  video {
    width: 100%;
  }

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 25px 0;

  .contentOfOurAchievements {
    position: absolute;
    width: 80%;
    top: 40%;
    left: 10%;
    right: 10%;
    color: white;
    font-size: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const CardAchievements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    p {
      font-size: 12px;
    }
  }
`;
