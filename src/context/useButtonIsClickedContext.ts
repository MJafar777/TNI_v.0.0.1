import { useContext } from "react";
import { ButtonContext, ButtonContextProps } from "./ButtonContext"; // ButtonContext turini oling

export const useButtonIsClickedStateContext = (): ButtonContextProps => {
  return useContext(ButtonContext);
};
