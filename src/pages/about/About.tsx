import { AboutWrapper } from "./AboutStyles";
import { Header,Contact, ShortInfo } from "./components";

const About = () => {
  return (
    <AboutWrapper>
      <Header />
      <ShortInfo/>
      <Contact/>
    </AboutWrapper>
  );
};

export default About;
