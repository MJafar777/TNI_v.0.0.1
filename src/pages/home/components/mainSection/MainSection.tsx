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
import CountdownCircle from "../../../../components/countdownCircle/CountdownCircle";

import { useState, useEffect } from "react";

import { mainBack } from "../../../../assets/images";
import { useButtonIsClickedStateContext } from "../../../../context/useButtonIsClickedContext";

const images = [`url(${mainBack})`, `url(${mainBack})`, `url(${mainBack})`];

const MainSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { setRequestOpen } = useButtonIsClickedStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Section>
      <MainSectionWrapper
        style={{ backgroundImage: images[currentImageIndex] }}
      >
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
              <div className="buttonCompButton">
                <ButtonComp buttonText={"Read more"} />
              </div>

              <div className="requestBtn" onClick={() => setRequestOpen(true)}>
                Request Quote
              </div>
            </div>
          </div>
        </MainSectionLeft>

        <MainSectionNumbers>
          <CountdownCircle secondNumber={"01"} />
          <p>02</p>
          <p>03</p>
        </MainSectionNumbers>
      </MainSectionWrapper>
    </Section>
  );
};

export default MainSection;
