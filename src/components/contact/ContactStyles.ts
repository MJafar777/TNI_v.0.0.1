import styled from "styled-components";
import { bgContact } from "../../assets/images/about";

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0;
  height: fit-content;
  align-items: center;
  justify-content: start;
  background-size: cover;
  background-image: url(${bgContact});

  @media screen and (max-width: 992px) {
    padding: 0 80px;
    align-items: center;
    flex-direction: column;
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
  gap: 25px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;

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
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .rightBorder {
      display: block;
    }
  }
`;

export const TopTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  align-items: center;
  line-height: normal;
  background-clip: text;
  letter-spacing: 4.24px;
  -webkit-background-clip: text;
  font-family: "MazzardM-Regular";
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);

  span {
    height: 1px;
    width: 36px;
    margin: 0 12px;
    background-clip: text;
    background: linear-gradient(90deg, #029ecf -0.96%, #27d0a5 99.04%);
  }
`;

export const Title = styled.div`
  color: #000;
  font-size: 56px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  font-family: Mazzard;
  letter-spacing: 1.12px;
`;

export const SubTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  font-family: Mazzard;
  letter-spacing: 1.12px;
  line-height: 108%; /* 17.28px */
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export const WrapperInput = styled.div`
  width: 45%;
  display: flex;
  margin: 10px 0;
  align-items: start;
  flex-direction: column;

  input {
    border: none;
    outline: none;
    margin-top: 10px;
    padding: 12px 20px;
    border-radius: 22px;
    background: #eaeaea;
  }

  @media screen and (max-width: 992px) {
    input {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const WrapperTextarea = styled.div`
  width: 100%;
  resize: none;
  display: flex;
  flex-direction: column;

  textarea {
    width: 80%;
    resize: none;
    border: none;
    outline: none;
    height: 200px;
    padding: 20px;
    margin-top: 10px;
    border-radius: 15px;
    background: #eaeaea;
  }

  @media screen and (max-width: 992px) {
    textarea {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  gap: 12px;
  color: #fff;
  border: none;
  display: flex;
  outline: none;
  font-size: 16px;
  margin-top: 10px;
  font-weight: 500;
  font-style: normal;
  border-radius: 27px;
  align-items: center;
  line-height: normal;
  font-family: Mazzard;
  padding: 4px 4px 4px 20px;
  justify-content: space-between;
  background: linear-gradient(270deg, #029ecf 0%, #27d0a5 100%);

  div {
    width: 48px;
    height: 48px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    background-color: #fff;
    justify-content: center;
  }
`;
