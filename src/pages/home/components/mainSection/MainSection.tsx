import { telegram, facebook, instagram } from "../../../../assets/images";

import { Section } from "../../../../styles";

import {
  MainSectionDesc,
  MainSectionLeft,
  MainSectionTitle,
  MainSectionShare,
  MainSectionWelcome,
  MainSectionNumbers,
  MainSectionWrapper,
  MainSectionSubTitle,
  MainSectionShareRow,
  MainSectionShareItem,
  MainSectionShareText,
  MainSectionWelcomeRow,
  MainSectionWelcomeText,
} from "./MainSectionStyles";

import ButtonComp from "../../../../components/buttons/ButtonComp";
import MainHeader from "../../../../layouts/header/mainHeader/MainHeader";

const MainSection = () => {
  return (
    <Section>
      <MainSectionWrapper>
        <MainHeader />

        <MainSectionLeft>
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

          <div>
            <MainSectionWelcome>
              <MainSectionWelcomeRow />

              <MainSectionWelcomeText>Welcome To</MainSectionWelcomeText>

              <MainSectionWelcomeRow className="mobileRow" />
            </MainSectionWelcome>

            <MainSectionTitle>Universal Polymer</MainSectionTitle>

            <MainSectionSubTitle>Chemical industry LTD</MainSectionSubTitle>

            <MainSectionDesc>
              The standard webpage maximum width dimensions for desktop screens
              are 1440 pixels. It's a common practice restrict the maxium width
              dimension for your site
            </MainSectionDesc>

            <div className="buttonComp">
              <ButtonComp buttonText={"Read more"} />
            </div>
          </div>
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
