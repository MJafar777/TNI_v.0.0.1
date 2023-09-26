import React, { createContext, useState } from "react";

export interface ButtonContextProviderProps {
  children: React.ReactNode;
}

export interface ButtonContextProps {
  requestOpen: boolean;
  setRequestOpen: (handle: boolean | ((prevState: boolean) => boolean)) => void;

  requestOpenSecond: boolean;
  setRequestOpenSecond: (
    handle: boolean | ((prevState: boolean) => boolean)
  ) => void;

  burgerOpen: boolean;
  setBurgerOpen: (handle: boolean | ((prevState: boolean) => boolean)) => void;
}

export const ButtonContext = createContext<ButtonContextProps>({
  requestOpen: true,
  setRequestOpen: () => {
    return;
  },
  requestOpenSecond: true,
  setRequestOpenSecond: () => {
    return;
  },
  burgerOpen: false,
  setBurgerOpen: () => {
    return;
  },
});

export const ButtonContextProvider: React.FC<ButtonContextProviderProps> = ({
  children,
}) => {
  const [requestOpen, setRequestOpen] = useState(false);
  const [requestOpenSecond, setRequestOpenSecond] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const value: ButtonContextProps = {
    requestOpen,
    setRequestOpen,
    requestOpenSecond,
    setRequestOpenSecond,
    burgerOpen,
    setBurgerOpen,
  };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
