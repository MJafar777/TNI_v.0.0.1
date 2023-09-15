import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import def from "./default";

import GlobalStyles from "./globals";

interface ThemeProps {
  children: ReactNode; // Specify children prop type
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={def}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
