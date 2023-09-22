import { styled } from "styled-components";

export const RequestContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #080f20;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .closeIcon {
    position: absolute;
    color: white;
    top: 10px;
    right: 10px;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const PurchaseContainer = styled.div`
  padding: 5px 10px;
  border-left: 4px solid #27d0a5;
  background: rgba(232, 232, 232, 0.1);

  p {
    color: #fff;
    font-family: Mazzard;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const RequestContactTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Mazzard;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px auto;
  text-align: center;
`;

export const RequestContactDesc = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24.244px;
`;

export const RequestContactNameInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin: 20px 0 21px 0;
  background-color: transparent;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #fff;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const RequestContactPhoneInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 21px;
  background-color: transparent;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #fff;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const RequestContactFeedbackInput = styled.textarea`
  width: 100%;
  outline: none;
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 21px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  resize: none;
  height: 150px;

  &::placeholder {
    color: #fff;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const RequestContactBtn = styled.button`
  color: #23212a;
  font-family: Mazzard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24.304px;
  padding: 10px 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background: linear-gradient(#27d0a5, #029ecf);
`;
