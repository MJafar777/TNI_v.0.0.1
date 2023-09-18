import { Section } from "../../../../styles";
import { MainSectionWrapper } from "./MainSectionStyles";
import MainHeader from "../../../../layouts/header/mainHeader/MainHeader";

const MainSection = () => {
  return (
    <Section>
      <MainSectionWrapper>
        <MainHeader />
      </MainSectionWrapper>
    </Section>
  );
};

export default MainSection;
