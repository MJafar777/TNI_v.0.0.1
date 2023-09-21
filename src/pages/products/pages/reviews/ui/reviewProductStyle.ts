import styled from "styled-components";

export const ReviewProductWrapper = styled.div`
  width: 100%;

  gap: 15px;

  display: inline-flex;
  justify-content: left;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 10px 20px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 150%; /* 21px */
  font-family: Lexend, sans-serif;

  background: linear-gradient(180deg, #27d0a5 0%, #029ecf 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  max-width: 120px;

  cursor: pointer;
  user-select: none;

  border-radius: 100px;
  border: 2px solid #f3fbf4;
`;

export const Hr = styled.button`
  width: 100%;

  border: 1px solid #f4f4f4;
`;

export const FlexDescriptionCreate = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Sup = styled.sup`
  color: #eb2606;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  font-style: normal;
  font-family: Lexend, sans-serif;
`;

export const ParagraphTitle = styled.p`
  color: #46494f;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  font-style: normal;
  font-family: Lexend, sans-serif;
`;

export const WrapperTextarea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  resize: none;

  border-radius: 8px;
  border: 2px solid #f4f4f4;

  textarea {
    width: 100%;
    resize: none;
    height: 100px;
    border-radius: 15px;
    background: transparent;
    border: none;
    outline: none;
    padding: 15px;

    font-family: Lexend, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  @media screen and (max-width: 992px) {
    textarea {
      width: 100%;
    }
  }
`;

export const SendMessage = styled.button`
  max-width: 120px;
  height: 46px;

  gap: 8px;
  display: flex;
  padding: 0px 40px;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 100px;
  background: linear-gradient(180deg, #27d0a5 0%, #029ecf 100%);

  color: #fff;

  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  line-height: 150%; /* 24px */
  font-family: Lexend, sans-serif;

  cursor: pointer;
  user-select: none;
`;
