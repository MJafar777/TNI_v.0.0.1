import { Delivery, OurAchievements } from "./components";
import MainSection from "./components/mainSection/MainSection";
import UniversalPolymer from "./components/universalPolymer/UniversalPolymer";

const Home = () => {
  return (
    <>
      <MainSection />

      <UniversalPolymer />

      <Delivery/>

      <OurAchievements/>
    </>
  );
};

export default Home;
