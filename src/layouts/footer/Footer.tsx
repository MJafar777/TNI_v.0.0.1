import { arrowRight } from "../../assets/images";
import {
  logoWord,
  logo,
  facebook,
  telegram,
  instagram,
  phone,
  email,
  location,
  borderRight,
} from "../../assets/images/footer";
import {
  ContactColumn,
  ContactIcon,
  ContainerOfFooter,
  ContainerOfLink,
  ContanerContact,
  ContententOfLogo,
  EachContact,
  EachContactContent,
  EachContactSubtitle,
  EachContactTitle,
  FooterWrapper,
  LinkOfColumn,
  Logo,
  LogoColumn,
  LogoText,
  LogoWrapper,
  NavigationColumn,
  Privancy,
  ProductColumn,
  Social,
  SocialContainer,
  SocialWrapper,
  // SubTitleLogo,
  TextOfSocial,
  // TitleLogo,
  TitleOfColumn,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContainerOfFooter>
        <LogoColumn>
          <LogoWrapper>
            <Logo>
              <img src={logo} alt="" />
            </Logo>

            <LogoText>
              <img src={logoWord} alt="" />
            </LogoText>
          </LogoWrapper>

          <ContententOfLogo>
            The standard webpage maximum width dimensions for desktop screens
          </ContententOfLogo>

          <SocialWrapper>
            <TextOfSocial>Folllow Us:</TextOfSocial>

            <SocialContainer>
              <Social>
                <img src={facebook} alt="" />
              </Social>
              <Social>
                <img src={telegram} alt="" />
              </Social>
              <Social>
                <img src={instagram} alt="" />
              </Social>
            </SocialContainer>
          </SocialWrapper>
        </LogoColumn>
        <img src={borderRight} alt="" />
        <NavigationColumn>
          <TitleOfColumn>
            Navigations
            <span></span>
          </TitleOfColumn>

          <ContainerOfLink>
            <LinkOfColumn>
              <img src={arrowRight} alt="" /> Home
            </LinkOfColumn>

            <LinkOfColumn>
              <img src={arrowRight} alt="" /> About
            </LinkOfColumn>

            <LinkOfColumn>
              {" "}
              <img src={arrowRight} alt="" /> Products
            </LinkOfColumn>

            <LinkOfColumn>
              {" "}
              <img src={arrowRight} alt="" />
              Contact Us
            </LinkOfColumn>
          </ContainerOfLink>
        </NavigationColumn>
        <img src={borderRight} alt="" />

        <ProductColumn>
          <TitleOfColumn>
            Our Products <span></span>
          </TitleOfColumn>
          <ContainerOfLink>
            <LinkOfColumn>
              <img src={arrowRight} alt="" /> Home
            </LinkOfColumn>

            <LinkOfColumn>
              <img src={arrowRight} alt="" /> About
            </LinkOfColumn>

            <LinkOfColumn>
              {" "}
              <img src={arrowRight} alt="" /> Products
            </LinkOfColumn>

            <LinkOfColumn>
              {" "}
              <img src={arrowRight} alt="" />
              Contact Us
            </LinkOfColumn>
          </ContainerOfLink>
          <LinkOfColumn></LinkOfColumn>
        </ProductColumn>
        <img src={borderRight} alt="" />

        <ContactColumn>
          <TitleOfColumn>
            Contact Us <span></span>
          </TitleOfColumn>
          <ContanerContact>
            <EachContact>
              <ContactIcon>
                <img src={phone} alt="" />
              </ContactIcon>
              <EachContactContent>
                <EachContactTitle>Phone</EachContactTitle>
                <EachContactSubtitle>+998 97 123 45 67</EachContactSubtitle>
              </EachContactContent>
            </EachContact>

            <EachContact>
              <ContactIcon>
                {" "}
                <img src={email} alt="" />
              </ContactIcon>
              <EachContactContent>
                <EachContactTitle>Email Address:</EachContactTitle>
                <EachContactSubtitle>tniasia@gmail.com</EachContactSubtitle>
              </EachContactContent>
            </EachContact>

            <EachContact>
              <ContactIcon>
                <img src={location} alt="" />
              </ContactIcon>
              <EachContactContent>
                <EachContactTitle>Location</EachContactTitle>
                <EachContactSubtitle>
                  Tashkent, Yakkasaroy 28
                </EachContactSubtitle>
              </EachContactContent>
            </EachContact>
          </ContanerContact>
        </ContactColumn>
      </ContainerOfFooter>

      <Privancy>
        Copyright 2023 _______________________. All rights reserved
      </Privancy>
    </FooterWrapper>
  );
};

export default Footer;
