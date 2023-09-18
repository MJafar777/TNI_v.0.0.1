import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 50%;
`;

export const FormContainer = styled.div`
  width: 60%;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const TopTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.24px;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "MazzardM-Regular";
  span {
    width: 30px;
    height: 1px;
    background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);
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
  gap: 25px;
  margin-top: 25px;
  textarea {
    width: 40vw;
    border-radius: 22px;
    height: 200px;
    background: #eaeaea;
    border: none;
    outline: none;
    padding: 8px 12px;
    font-size: 14px;
    resize: none;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  label {
    color: #000;
    font-family: Mazzard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 108%; /* 15.12px */
    letter-spacing: 0.98px;
    margin-bottom: 8px;
  }
  input {
    border-radius: 22px;
    background: #eaeaea;
    border: none;
    outline: none;
    padding: 15px 12px;
  }
`;

export const Button = styled.button`
  border-radius: 27px;
  outline: none;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  color: #fff;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 4px 4px 4px 20px;
  cursor: pointer;
  background: linear-gradient(270deg, #029ecf 0%, #27d0a5 100%);
  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
  }
`;
