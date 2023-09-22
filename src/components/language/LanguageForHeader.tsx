import { useContext } from "react";
import { ko, uz, ru } from "../../assets/images/components/language";
import {
  CurrentLang2,
  LangImg,
  LangWrapper,
  ListOfLang2,
} from "./LanguageStyles";
import { LanguageContext } from "../../context/LanguageContext";

const data = [
  { name: "Uz", img: uz, id: "uz" },

  { name: "Ko", img: ko, id: "ko" },
  
  { name: "Ru", img: ru, id: "ru" },
];

const LanguageForHeader = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  const { openListOfLang, setOpenListOfLang, chooseLang, handleGetLang } =
    useContext(LanguageContext);

  return (
    <LangWrapper>
      {data
        .filter((lang) => lang.id === chooseLang)
        .map((lang, index) => {
          return (
            <CurrentLang2 key={index} onClick={() => setOpenListOfLang(true)}>
              <LangImg src={lang.img} />
              <p>{lang.name}</p>
            </CurrentLang2>
          );
        })}
      {openListOfLang ? (
        <ListOfLang2>
          <CurrentLang2 onClick={() => handleGetLang("uz")}>
            <LangImg src={uz} />
            <p>Uz</p>
          </CurrentLang2>
          <CurrentLang2 onClick={() => handleGetLang("ko")}>
            <LangImg src={ko} />
            <p>Ko</p>
          </CurrentLang2>
          <CurrentLang2 onClick={() => handleGetLang("ru")}>
            <LangImg src={ru} />
            <p>Ru</p>
          </CurrentLang2>
        </ListOfLang2>
      ) : (
        ""
      )}
    </LangWrapper>
  );
};

export default LanguageForHeader;
