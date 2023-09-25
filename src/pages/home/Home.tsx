import { HomePageContainer } from "./HomeStyles";

// ----------- Sections  -----------
import {
  Comments,
  WhatWeDo,
  Delivery,
  MainSection,
  OurProducts,
  OurAchievements,
} from "./components";
import { Contact } from "../about/components";
import UniversalPolymer from "./components/universalPolymer/UniversalPolymer";
import { RequestContact } from "../../components";

const Home = () => {
  return (
    <HomePageContainer>
      <MainSection />

      <RequestContact />

      <UniversalPolymer />

      <OurProducts />

      <WhatWeDo />

      <Delivery />

      <OurAchievements />

      <Comments />

      <Contact />
    </HomePageContainer>
  );
};

export default Home;
