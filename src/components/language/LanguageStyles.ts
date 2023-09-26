import styled from "styled-components";

export const LangWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1000 !important;
`;

export const CurrentLang = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding: 6px 20px 6px 6px;
  z-index: 1000 !important;

  p {
    color: #000;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:hover {
    p {
      color: #27d0a5;
    }
  }

  @media screen and (max-width: 576px) {
    margin-right: 12px;
    p {
      display: none;
    }
  }
`;

export const CurrentLangLi = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding: 6px 20px 6px 6px;
  p {
    color: #000;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:hover {
    background: #f1f1f1;
  }
`;

export const LangImg = styled.img``;

export const ListOfLang = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  width: 85px;
  height: fit-content;
  flex-shrink: 0;
  background: #fff;
`;

export const CurrentLang2 = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding: 6px 20px 6px 6px;
  p {
    color: white;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:hover {
      p {
        color: #27d0a5;
      }
    }
  }
  @media screen and (max-width: 576px) {
    margin-right: 12px;
    p {
      display: none;
    }
  }
`;

export const ListOfLang2 = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 85px;
  height: fit-content;
  flex-shrink: 0;
  background: black;
`;
