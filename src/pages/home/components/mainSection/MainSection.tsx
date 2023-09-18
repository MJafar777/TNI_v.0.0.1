import { telegram, facebook, instagram } from "../../../../assets/images";

import { Section } from "../../../../styles";

import {
  MainSectionDesc,
  MainSectionLeft,
  MainSectionNumbers,
  MainSectionShare,
  MainSectionShareItem,
  MainSectionShareRow,
  MainSectionShareText,
  MainSectionSubTitle,
  MainSectionTitle,
  MainSectionWelcome,
  MainSectionWelcomeRow,
  MainSectionWelcomeText,
  MainSectionWrapper,
} from "./MainSectionStyles";

import MainHeader from "../../../../layouts/header/mainHeader/MainHeader";
import ButtonComp from "../../../../components/buttons/ButtonComp";

const MainSection = () => {
  return (
    <Section>
      <MainSectionWrapper>
        <MainHeader />

        <MainSectionShare>
          <MainSectionShareText>Follow Us</MainSectionShareText>

          <MainSectionShareRow />

          <MainSectionShareItem>
            <img src={facebook} alt="facebook" />
          </MainSectionShareItem>

          <MainSectionShareItem>
            <img src={telegram} alt="telegram" />
          </MainSectionShareItem>

          <MainSectionShareItem>
            <img src={instagram} alt="instagram" />
          </MainSectionShareItem>
        </MainSectionShare>

        <MainSectionLeft>
          <MainSectionWelcome>
            <MainSectionWelcomeRow />
            <MainSectionWelcomeText>Welcome To</MainSectionWelcomeText>
          </MainSectionWelcome>

          <MainSectionTitle>Universal Polymer</MainSectionTitle>

          <MainSectionSubTitle>Chemical industry LTD</MainSectionSubTitle>

          <MainSectionDesc>
            The standard webpage maximum width dimensions for desktop screens
            are 1440 pixels. It's a common practice restrict the maxium width
            dimension for your site
          </MainSectionDesc>

          <ButtonComp buttonText={"Read more"} />
        </MainSectionLeft>

        <MainSectionNumbers>
          <p>01</p>
          <p className="active-number">02</p>
          <p>03</p>
        </MainSectionNumbers>
      </MainSectionWrapper>
    </Section>
  );
};

export default MainSection;
