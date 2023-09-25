import styled from "styled-components";
import { bgOfFooter } from "../../assets/images/footer";

export const FooterWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 300px;
  background-image: url(${bgOfFooter});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 992px) {
    .productColumnLine {
      display: none;
    }
  }
`;

export const ContainerOfFooter = styled.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 576px) {
    padding: 0 10px;
  }
`;

export const LogoColumn = styled.div`
  margin-bottom: 50px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 33px;
  height: 20%;
`;

export const Logo = styled.div`
  @media screen and (max-width: 786px) {
    img {
      width: 38.723px;
      height: 37.755px;
    }
  }

  @media screen and (max-width: 576px) {
    img {
      width: 30.723px;
      height: 30.755px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 25px;
    font-size: 25px;
  }
`;

export const LogoText = styled.div`
  @media screen and (max-width: 992px) {
    img {
      width: 123.914px;
      height: 38.723px;
      flex-shrink: 0;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100px;
      height: 30px;
      flex-shrink: 0;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 80px;
      height: 28px;
      flex-shrink: 0;
    }
  }
`;

export const ContententOfLogo = styled.div`
  width: 284px;
  color: #fff;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: 0.98px;
  /* margin: 28px 0; */

  @media screen and (max-width: 992px) {
    width: 220px;
  }

  @media screen and (max-width: 768px) {
    width: 180px;
  }

  @media screen and (max-width: 576px) {
    width: 150px;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    width: 130px;
    font-size: 12px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;

export const TextOfSocial = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Social = styled.div`
  width: 38px;
  height: 38px;
  border: white 1px solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 19.247px;
    height: 19.247px;
    img {
      width: 9px;
      height: 9px;
    }
  }
`;

export const NavigationColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`;

export const TitleOfColumn = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 20%;
  margin-bottom: 33px;
  span {
    display: block;
    margin-top: 21px;
    width: 62px;
    height: 2px;
    background: linear-gradient(180deg, #029ecf -199.99%, #27d0a5 0%);
  }

  @media screen and (max-width: 992px) {
    font-size: 18px;
  }
`;

export const ContainerOfLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 13px;
  height: 80%;
`;

export const LinkOfColumn = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  gap: 6px;
  cursor: pointer;
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  /* justify-content: space-between; */
  height: 100%;
`;

export const ContanerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
`;

export const EachContact = styled.div`
  display: flex;
  gap: 12px;
`;

export const ContactIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #029ecf 0%, #27d0a5 100%);

  @media screen and (max-width: 992px) {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const EachContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const EachContactTitle = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const EachContactSubtitle = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Privancy = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  letter-spacing: 0.98px;
`;
