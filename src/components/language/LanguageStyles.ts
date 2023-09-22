import styled from "styled-components";

export const LangWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const CurrentLang = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding: 6px 12px;
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
  padding: 6px 12px;
  p {
    color: white;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &:hover {
    background: #1a1a1a;
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
