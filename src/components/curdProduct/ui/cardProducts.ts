import styled from "styled-components";

interface Props {
  bgRactangle: string;
}
interface PropsImg {
  src: string;
  alt: string;
}

export const CardProductsWrapper = styled.div`
  width: 100%;
  max-width: 346px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.12);

  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  cursor: pointer;
  user-select: none;

  @media only screen and (max-width: 1060px) {
    max-width: 100%;
    margin: 10px auto;
  }
`;
export const BgImgProduct = styled.div<Props>`
  width: 100%;
  height: 200px;
  cursor: pointer;
  max-width: 346px;
  user-select: none;
  background: linear-gradient(
    90deg,
    rgba(200, 196, 192, 1) 0%,
    rgba(232, 231, 229, 1) 50%,
    rgba(200, 196, 193, 1) 100%
  );

  align-items: center;
  display: flex;
  justify-content: center;

  border-radius: 10px 10px 0px 0px;

  @media only screen and (max-width: 1060px) {
    max-width: 100%;

    height: auto;
    margin: 0 auto;
  }
`;

export const ImgProduct = styled.img<PropsImg>`
  width: 220px;
  height: 220px;
  transform: scale(0.7);
`;

export const ProductMain = styled.div`
  padding: 28px 18px;
`;

export const TitleAndStar = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 650px) {
    flex-direction: row;
  }
`;

export const PriceAndBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;
