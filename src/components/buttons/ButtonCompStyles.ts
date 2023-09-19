import { styled } from "styled-components";

export const ButtonCompWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-radius: 50px;
  border: 2px solid #029ecf;
  height: 54px;
  width: fit-content;
  cursor: pointer;
  transition: all 1s;
  overflow: hidden;
  outline: none;
  background: none;

  .buttonArrow {
    color: white;
    font-size: 20px;
  }

  .leftButtonCompText {
    transition: all 0.3s;
    display: none;
  }

  .rightButtonCompText {
    display: inline-block;
  }

  &:hover {
    background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);

    .leftButtonCompText {
      display: inline-block;
    }

    .rightButtonCompText {
      display: none;
    }

    p {
      background: linear-gradient(180deg, #fff 0%, #fff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .buttonCompItem {
      background: #fff;
    }

    .linerArrow {
      display: inline-block;
    }

    .buttonArrow {
      display: none;
    }
  }
`;

export const ButtonCompText = styled.p`
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 25px;
`;

export const ButtonCompItem = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  border-radius: 50%;

  .linerArrow {
    display: none;
  }
`;
