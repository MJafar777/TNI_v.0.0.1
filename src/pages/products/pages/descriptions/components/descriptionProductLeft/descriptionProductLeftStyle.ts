import styled from "styled-components";

interface PropsImg {
  src: string;
  alt: string;
}

export const DescriptionProductLeftWrapper = styled.div``;

export const BgPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.092px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 510px;
  max-height: 460px;

  padding: 20px;

  border-radius: 22px;
  background: #f9fafa;
  border: 0.9px solid #f4f4f4;
`;

export const ImgProduct = styled.img<PropsImg>`
  flex-shrink: 0;

  border-radius: 8px;
`;

export const ChildBtns = styled.button`
  width: 35px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background-color: #fff;

  cursor: pointer;
  user-select: none;
`;

export const CHildPanels = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightBtnSend = styled.img<PropsImg>`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const LeftBtnVector = styled.img<PropsImg>`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const SliderImages = styled.div`
  width: 100%;
  max-width: 510px;
  margin-top: 20px;

  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderBtnImages = styled.div`
  width: 57px;
  height: 57px;

  gap: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background: #f4f4f4;

  cursor: pointer;
`;

export const ImgMini = styled.img<PropsImg>`
  width: 57px;
`;
