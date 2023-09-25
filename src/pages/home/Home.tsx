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
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Home = () => {
  const { setOpenListOfLang, openListOfLang } = useContext(LanguageContext);

  return (
    <HomePageContainer>
      {openListOfLang ? (
        <div
          className="containerOfLanguage"
          onClick={() => setOpenListOfLang(false)}
        ></div>
      ) : (
        ""
      )}
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
