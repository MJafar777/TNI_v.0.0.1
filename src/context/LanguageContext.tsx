import React, { createContext, useState } from "react";
import useLocales from "../locales/useLocales";

// ----------- Types  -----------

interface LanguageContextProviderProps {
  children: React.ReactNode;
}

export interface LanguageContextProps {
  chooseLang: string;
 
  openListOfLang: boolean;
 
  setOpenListOfLang: (prop: boolean) => void;
 
  setChooseLang: (prop: string) => void;
 
  handleGetLang: (prop: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  chooseLang: "uz",

  openListOfLang: false,
  
  setOpenListOfLang: () => {
    return;
  },
  
  setChooseLang: () => {
    return;
  },
  
  handleGetLang: () => {
    return;
  },
});

export const LanguageContextProvider: React.FC<
  LanguageContextProviderProps
> = ({ children }) => {
  const [chooseLang, setChooseLang] = useState("uz");

  const [openListOfLang, setOpenListOfLang] = useState(false);
  
  const { onChangeLang } = useLocales();

  const handleGetLang = (prop: string) => {

    onChangeLang(prop);

    setChooseLang(prop);
    
    setOpenListOfLang(false);
  };

  const value: LanguageContextProps = {
    handleGetLang,

    setOpenListOfLang,
    
    setChooseLang,
    
    chooseLang,
    
    openListOfLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
