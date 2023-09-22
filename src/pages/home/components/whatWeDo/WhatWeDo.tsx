import ButtonComp from "../../../../components/buttons/ButtonComp";

import {
  WhatWeDoDesc,
  WhatWeDoLeft,
  WhatWeDoRight,
  WhatWeDoTitle,
  WhatWeDoWelcome,
  WhatWeDoWrapper,
  WhatWeDoWelcomeRow,
  WhatWeDoWelcomeText,
} from "./WhatWeDoStyles";

import { Section } from "../../../../styles";
import backVideo from "../../../../assets/v.mp4";

const WhatWeDo = () => {
  return (
    <Section>
      <WhatWeDoWrapper>
        <WhatWeDoLeft>
          <WhatWeDoWelcome>
            <WhatWeDoWelcomeRow />

            <WhatWeDoWelcomeText>What We Do</WhatWeDoWelcomeText>
          </WhatWeDoWelcome>

          <WhatWeDoTitle>Universal Polymer</WhatWeDoTitle>

          <WhatWeDoDesc>
            The standard webpage maximum width dimensions for desktop screens
            are 1440 pixels. It's a common practice restrict the maxium width
            dimension for your site
          </WhatWeDoDesc>

          <div className="whatWeDoBtn">
            <ButtonComp buttonText={"Contact With Us"} />
          </div>
        </WhatWeDoLeft>

        <WhatWeDoRight>
          <video width="300%" height="auto" loop autoPlay controls>
            <source src={backVideo} />
          </video>
        </WhatWeDoRight>
      </WhatWeDoWrapper>
    </Section>
  );
};

export default WhatWeDo;
