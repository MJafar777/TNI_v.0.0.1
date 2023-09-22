import styled from "styled-components";
import { bgOfFooter } from "../../assets/images/footer";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 603px;
  padding-top: 200px;
  background-image: url(${bgOfFooter});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerOfFooter = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const LogoColumn = styled.div``;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Logo = styled.div``;

export const LogoText = styled.div``;

export const TitleLogo = styled.div``;

export const SubTitleLogo = styled.div``;

export const ContententOfLogo = styled.div`
  width: 284px;
  color: #fff;
  font-family: Mazzard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: 0.98px;
  margin: 28px 0;
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
`;

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
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
