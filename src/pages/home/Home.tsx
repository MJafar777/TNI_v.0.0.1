import { Contact } from "../about/components";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import OurProducts from "./components/ourProducts/OurProducts";
import MainSection from "./components/mainSection/MainSection";
import { Comments, Delivery, OurAchievements } from "./components";
import UniversalPolymer from "./components/universalPolymer/UniversalPolymer";
import { HomePageContainer } from "./HomeStyles";

const Home = () => {
  return (
    <HomePageContainer>
      <MainSection />

      <UniversalPolymer />

      <OurProducts />

      <WhatWeDo />

      <Delivery />

      <OurAchievements />

      <Comments />

      <Contact />

      {/* <div style={{ height: "1000px" }}></div> */}
    </HomePageContainer>
  );
};

export default Home;
