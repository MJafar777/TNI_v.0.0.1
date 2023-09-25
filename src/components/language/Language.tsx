import { useContext } from "react";

import {
  CurrentLang,
  LangImg,
  LangWrapper,
  ListOfLang,
} from "./LanguageStyles";

import { LanguageContext } from "../../context/LanguageContext";

import { ko, uz, ru } from "../../assets/images/components/language";

const data = [
  { name: "Uz", img: uz, id: "uz" },

  { name: "Ko", img: ko, id: "ko" },

  { name: "Ru", img: ru, id: "ru" },
];

const Language = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { openListOfLang, setOpenListOfLang, chooseLang, handleGetLang } =
    useContext(LanguageContext);

  return (
    <LangWrapper>
      {data
        .filter((lang) => lang.id === chooseLang)
        .map((lang, index) => {
          return (
            <CurrentLang
              key={index}
              onClick={() => setOpenListOfLang(!openListOfLang)}
            >
              <LangImg src={lang.img} />
              <p>{lang.name}</p>
            </CurrentLang>
          );
        })}
      {openListOfLang ? (
        <ListOfLang>
          <CurrentLang onClick={() => handleGetLang("uz")}>
            <LangImg src={uz} />
            <p>Uz</p>
          </CurrentLang>
          <CurrentLang onClick={() => handleGetLang("ko")}>
            <LangImg src={ko} />
            <p>Ko</p>
          </CurrentLang>
          <CurrentLang onClick={() => handleGetLang("ru")}>
            <LangImg src={ru} />
            <p>Ru</p>
          </CurrentLang>
        </ListOfLang>
      ) : (
        ""
      )}
    </LangWrapper>
  );
};

export default Language;
