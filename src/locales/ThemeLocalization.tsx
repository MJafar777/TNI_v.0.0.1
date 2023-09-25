import { ReactNode } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import useLocales from "./useLocales";

interface ThemeLocalizationProps {
  children: ReactNode;
}

export default function ThemeLocalization({
  children,
}: ThemeLocalizationProps) {
  const outerTheme = useTheme();
  const { currentLang } = useLocales();

  const theme = createTheme(outerTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
