import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BgImg = styled.img`
  position: absolute;
  background-color: red;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
`;

export const ContainerLoginMainSection = styled.div`
  display: flex;
  padding: 24px 46px 50px 46px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TopTile = styled.div`
  color: #344767;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 250px;
  gap: 12px;
  cursor: pointer;
`;

export const SocialIcon = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-self: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #ced4da;
  width: 100%;
`;

export const Subtitle = styled.div`
  color: #adb5bd;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const NameInput = styled.input`
  display: flex;
  width: 382px;
  padding: 12px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #ced4da;

  &::placeholder {
    color: #adb5bd;
    font-family: Mazzard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;

export const EmailInput = styled.input`
  &::placeholder {
    color: #adb5bd;
    font-family: Mazzard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  display: flex;
  width: 382px;
  padding: 12px;
  align-items: flex-start;
  gap: 8px;

  border-radius: 8px;
  border: 1px solid #ced4da;

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;

export const PasswordInput = styled.input`
  &::placeholder {
    color: #adb5bd;
    font-family: Mazzard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  display: flex;
  width: 382px;
  padding: 12px;
  align-items: flex-start;
  gap: 8px;

  border-radius: 8px;
  border: 1px solid #ced4da;

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;

export const CheckBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  color: #a0a0a0;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  input {
    width: 21px;
  }

  span {
    background: linear-gradient(180deg, #27d0a5 0%, #029ecf 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Mazzard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 382px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  color: white;
  border-radius: 8px;
  background: linear-gradient(180deg, #27d0a5 0%, #029ecf 100%);
  cursor: pointer;

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;

export const ContentLogin = styled.div`
  color: #a0a0a0;
  font-family: Mazzard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  a {
    background: linear-gradient(180deg, #27d0a5 0%, #029ecf 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Mazzard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;
