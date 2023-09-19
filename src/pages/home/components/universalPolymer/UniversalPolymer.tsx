import {
  Ellipse,
  PolymerBack,
  PolymerBack2,
  section2Back,
} from "../../../../assets/images";

import { Section } from "../../../../styles";
import ButtonComp from "../../../../components/buttons/ButtonComp";

import {
  UniversalPolymerDesc,
  UniversalPolymerLeft,
  UniversalPolymerRight,
  UniversalPolymerTitle,
  UniversalPolymerTitleHerBox,
  UniversalPolymerTitleHerBoxDesc,
  UniversalPolymerTitleHerBoxTitle,
  UniversalPolymerWelcome,
  UniversalPolymerWelcomeRow,
  UniversalPolymerWelcomeText,
  UniversalPolymerWrapper,
} from "./UniversalPolymerStyles";

const UniversalPolymer = () => {
  return (
    <Section>
      <UniversalPolymerWrapper>
        <img src={section2Back} alt="section2Back" className="section2Back" />

        <UniversalPolymerLeft>
          <img src={PolymerBack} alt="polymerBack" />

          <img className="polymerBack2" src={PolymerBack2} alt="PolymerBack2" />
        </UniversalPolymerLeft>

        <UniversalPolymerRight>
          <UniversalPolymerWelcome>
            <UniversalPolymerWelcomeRow />
            <UniversalPolymerWelcomeText>About Us</UniversalPolymerWelcomeText>
          </UniversalPolymerWelcome>

          <UniversalPolymerTitle>Universal Polymer</UniversalPolymerTitle>

          <UniversalPolymerDesc>
            The standard webpage maximum width dimensions for desktop screens
            are 1440 pixels. It's a common practice restrict the maxium width
            dimension for your site
          </UniversalPolymerDesc>

          <UniversalPolymerTitleHerBox>
            <img src={Ellipse} alt="Ellipse" />
            <div>
              <UniversalPolymerTitleHerBoxTitle>
                Title Here
              </UniversalPolymerTitleHerBoxTitle>

              <UniversalPolymerTitleHerBoxDesc>
                The standard webpage maximum width dimensions for desktop
                screens are 1440 pixels. It's a common practice restrict the
                maxium width dimension for your site
              </UniversalPolymerTitleHerBoxDesc>
            </div>
          </UniversalPolymerTitleHerBox>

          <UniversalPolymerTitleHerBox>
            <img src={Ellipse} alt="Ellipse" />
            <div>
              <UniversalPolymerTitleHerBoxTitle>
                Title Here
              </UniversalPolymerTitleHerBoxTitle>

              <UniversalPolymerTitleHerBoxDesc>
                The standard webpage maximum width dimensions for desktop
                screens are 1440 pixels. It's a common practice restrict the
                maxium width dimension for your site
              </UniversalPolymerTitleHerBoxDesc>
            </div>
          </UniversalPolymerTitleHerBox>

          <div className="universalPolymerButtonComp">
            <ButtonComp buttonText={"Read more"} />
          </div>
        </UniversalPolymerRight>
      </UniversalPolymerWrapper>
    </Section>
  );
};

export default UniversalPolymer;
