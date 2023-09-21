import { Contact } from "../about/components";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import OurProducts from "./components/ourProducts/OurProducts";
import MainSection from "./components/mainSection/MainSection";
import { Comments, Delivery, OurAchievements } from "./components";
import UniversalPolymer from "./components/universalPolymer/UniversalPolymer";

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
