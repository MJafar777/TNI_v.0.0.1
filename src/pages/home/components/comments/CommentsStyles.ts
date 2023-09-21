import styled from "styled-components";

export const CommentsWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

export const Subtitle = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  color: #000;
  text-align: center;
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 96.5%; /* 15.44px */
  letter-spacing: 1.12px;
  margin-top: 10px;
`;

export const SliderWrapper = styled.div`
  max-width: 1366px;
  width: 90%;

  .swiper {
    width: 100%;
    height: 100%;
  }
  /* .slick-active {
    border-radius: 11.146px;
    border: 1.486px solid #27d0a5;
    background: linear-gradient(180deg, #27d0a5 0%, #029ecf 100%);
  } */

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
