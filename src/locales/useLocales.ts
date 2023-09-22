import { useTranslation } from "react-i18next";

// ---------- utils ----------

// ---------- lang ----------
import { allLangs, defaultLang } from "./config-lang";
import localStorageAvailable from "../utils/localStorageAvailable";

// ---------- settings context ----------

// ----------------------------------------------------------------------
export default function useLocales() {
  const { i18n, t: translate } = useTranslation();

  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable
    ? localStorage.getItem("i18nextLng")
    : "";

  const currentLang =
    allLangs.find((_lang: { value: string }) => _lang.value === langStorage) ||
    defaultLang;

  const handleChangeLanguage = (newlang: string | undefined) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: string) => translate(text),
    currentLang,
    allLangs,
  };
}
