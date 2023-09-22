import React, { createContext, useState } from "react";

export interface ButtonContextProviderProps {
  children: React.ReactNode;
}

export interface ButtonContextProps {
  requestOpen: boolean;
  setRequestOpen: (handle: boolean | ((prevState: boolean) => boolean)) => void;
}

export const ButtonContext = createContext<ButtonContextProps>({
  requestOpen: true,
  setRequestOpen: () => {
    return;
  },
});

export const ButtonContextProvider: React.FC<ButtonContextProviderProps> = ({
  children,
}) => {
  const [requestOpen, setRequestOpen] = useState(false);

  const value: ButtonContextProps = {
    requestOpen,
    setRequestOpen,
  };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
