import { AboutWrapper } from "./AboutStyles";
import { Header, Contact, ShortInfo } from "./components";

const About = () => {
  return (
    <>
      <Header />

      <AboutWrapper>
        <ShortInfo />

        <Contact />
      </AboutWrapper>
    </>
  );
};

export default About;
