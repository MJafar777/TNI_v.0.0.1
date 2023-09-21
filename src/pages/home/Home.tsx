import { Contact } from "../about/components";
import { Comments, Delivery, OurAchievements } from "./components";
import MainSection from "./components/mainSection/MainSection";
import OurProducts from "./components/ourProducts/OurProducts";
import UniversalPolymer from "./components/universalPolymer/UniversalPolymer";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";

const Home = () => {
  return (
    <>
      <MainSection />

      <UniversalPolymer />

      <OurProducts />

      <WhatWeDo />
      
      <Delivery />

      <OurAchievements />

      <Comments />

      <Contact />
    </>
  );
};

export default Home;
