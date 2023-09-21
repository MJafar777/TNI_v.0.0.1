import { Contact } from "../about/components";
import { Comments, Delivery, OurAchievements } from "./components";
import MainSection from "./components/mainSection/MainSection";
import UniversalPolymer from "./components/universalPolymer/UniversalPolymer";

const Home = () => {
  return (
    <>
      <MainSection />

      <UniversalPolymer />

      <Delivery />

      <OurAchievements />

      <Comments />

      <Contact />
    </>
  );
};

export default Home;
