import React, { useState } from "react";
import { ko, uz, ru } from "../../assets/images/components/language";
import {
  CurrentLang,
  LangImg,
  LangWrapper,
  ListOfLang,
} from "./LanguageStyles";
import { useTranslation } from "react-i18next";

const data = [
  { name: "Uz", img: uz, id: "uz" },
  { name: "Ko", img: ko, id: "ko" },
  { name: "Ru", img: ru, id: "ru" },
];

const Language = () => {
  const [chooseLang, setChooseLang] = useState("uz");
  const [openListOfLang, setOpenListOfLang] = useState(false);

  const { i18n } = useTranslation();
  console.log(i18n, "fgh");

  const handleGetLang = (prop: string) => {
    setChooseLang(prop);

    setOpenListOfLang(false);
    console.log("lslsllsl");

    i18n.changeLanguage(i18n.language);
  };

  return (
    <LangWrapper>
      {data
        .filter((lang) => lang.id === chooseLang)
        .map((lang, index) => {
          return (
            <CurrentLang key={index} onClick={() => setOpenListOfLang(true)}>
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
