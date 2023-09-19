import ButtonComp from "../../../../components/buttons/ButtonComp";

import {
  WhatWeDoDesc,
  WhatWeDoLeft,
  WhatWeDoRight,
  WhatWeDoTitle,
  WhatWeDoWelcome,
  WhatWeDoWelcomeRow,
  WhatWeDoWelcomeText,
  WhatWeDoWrapper,
} from "./WhatWeDoStyles";

const WhatWeDo = () => {
  return (
    // <Section>
    <WhatWeDoWrapper>
      <WhatWeDoLeft>
        <WhatWeDoWelcome>
          <WhatWeDoWelcomeRow />

          <WhatWeDoWelcomeText>What We Do</WhatWeDoWelcomeText>
        </WhatWeDoWelcome>

        <WhatWeDoTitle>Universal Polymer</WhatWeDoTitle>

        <WhatWeDoDesc>
          The standard webpage maximum width dimensions for desktop screens are
          1440 pixels. It's a common practice restrict the maxium width
          dimension for your site
        </WhatWeDoDesc>

        <div className="whatWeDoBtn">
          <ButtonComp buttonText={"Contact With Us"} />
        </div>
      </WhatWeDoLeft>
      <WhatWeDoRight></WhatWeDoRight>
    </WhatWeDoWrapper>
    // </Section>
  );
};

export default WhatWeDo;
