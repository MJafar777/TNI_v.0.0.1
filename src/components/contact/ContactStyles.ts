import styled from "styled-components";
import { bgContact } from "../../assets/images/about";

export const ContactWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  height: fit-content;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: start;
  background-image: url(${bgContact});
  background-size: cover;
  .my-2 {
    margin-top: 20px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 0 80px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 60px;
  }

  @media screen and (max-width: 576px) {
    padding: 0 40px;
  }
`;

export const Img = styled.img`
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 25px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const TopOfForm = styled.div`
  .rightBorder {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .rightBorder {
      display: block;
    }
  }
`;

export const TopTitle = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.24px;
  span {
    height: 1px;
    width: 36px;
    margin: 0 12px;
    background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
    background-clip: text;
  }
`;

export const Title = styled.div`
  color: #000;
  font-family: "MazzardM-Bold";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.12px;
  margin: 8px 0;
`;

export const SubTitle = styled.div`
  color: #000;
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 108%; /* 17.28px */
  letter-spacing: 1.12px;
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const WrapperInput = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 0;
  label {
    font-size: 14px;
  }

  input {
    width: 98%;
    outline: none;
    border: none;
    border-radius: 22px;
    background: #eaeaea;
    padding: 18px 20px;
    margin-bottom: 18px;
    margin-top: 7px;
  }

  @media screen and (max-width: 992px) {
    input {
      justify-content: center;
    }
  }
`;

export const WrapperTextarea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  resize: none;
  label {
    font-size: 14px;
  }
  textarea {
    margin-top: 10px;
    width: 99%;
    resize: none;
    height: 200px;
    border-radius: 15px;
    background: #eaeaea;
    border: none;
    outline: none;
    padding: 20px;
  }

  @media screen and (max-width: 992px) {
    textarea {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  border-radius: 27px;
  background: linear-gradient(270deg, #029ecf 0%, #27d0a5 100%);
  outline: none;
  border: none;
  margin-top: 10px;
  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 4px 4px 4px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  div {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
  }
`;
