import styled from "styled-components";
import { bgContact } from "../../../../assets/images/about";

export const ContactWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: start;
  background-image: url(${bgContact});
  background-size: cover;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 135px;
  }
`;

export const Img = styled.img`
  width: 50%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 25px;
`;

export const TopOfForm = styled.div``;

export const TopTitle = styled.div`
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "MazzardM-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.24px;
`;

export const Title = styled.div`
  color: #000;
  font-family: Mazzard;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.12px;
`;

export const SubTitle = styled.div`
  color: #000;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 108%; /* 17.28px */
  letter-spacing: 1.12px;
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const WrapperInput = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 0;
  input {
    outline: none;
    border: none;
    border-radius: 22px;
    background: #eaeaea;
    padding: 12px 20px;
    margin-top: 10px;
  }

  @media screen and (max-width: 992px) {
    input {
      justify-content: center;
      width: 100%;
    }
  }
`;

export const WrapperTextarea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  resize: none;
  textarea {
    margin-top: 10px;
    width: 80%;
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
