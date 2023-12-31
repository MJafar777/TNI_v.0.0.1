import { styled } from "styled-components";

interface PropsImg {
  src: string;
  alt: string;
}
interface Props {
  handleBtnCurd: boolean;
}

export const BtnBuy = styled.div`
  width: 145px;
  height: 42px;
  cursor: pointer;

  flex-shrink: 0;
  background: radial-gradient(
        circle at 100% 100%,
        transparent 0,
        transparent 16px,
        transparent 16px
      )
      0% 0%/20px 20px no-repeat,
    linear-gradient(221deg, #029fcf 0%, #24cca8 100%);
  padding: 2px;
  border-radius: 20px;
`;

export const Img = styled.img<PropsImg>`
  width: 15px;
`;

export const BtnRacktangle = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 2px;
  border-radius: 20px;
  background-color: ${(e) => (e.handleBtnCurd ? "transparent" : "white")};

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.3s ease-in-out;
`;

export const TextBtn = styled.p<Props>`
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
  background: #029fcf;
  font-family: MazzardM-Medium, sans-serif;
  background: linear-gradient(to right, #029fcf 0%, #24cca8 100%);
  background-clip: padding-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin: 0 14px;
  user-select: none;

  background-image: ${(e) =>
    e.handleBtnCurd
      ? "linear-gradient(180deg, #fff 0%, #fff 100%)"
      : "linear-gradient(180deg, #029ecf 0%, #27d0a5 100%)"};
  transform: ${(e) => (e.handleBtnCurd ? "translateX(-70%)" : "none")};

  transition: all 0.3s ease-in-out;
`;

export const Circle = styled.div<Props>`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-image: ${(e) =>
    e.handleBtnCurd
      ? "linear-gradient(180deg, #fff 0%, #fff 100%)"
      : "linear-gradient(180deg, #029ecf 0%, #27d0a5 100%)"};

  z-index: 2;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  transform: ${(e) => (e.handleBtnCurd ? "translateX(305%)" : "none")};
  background-color: ${(e) => (e.handleBtnCurd ? "#fff" : "transparent")};
`;
