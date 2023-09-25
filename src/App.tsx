import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/theme";
import { Header, Footer } from "./layouts";
import { Loader } from "./components";

import "./locales/i18n";
import { LanguageContextProvider } from "./context/LanguageContext";
// import ThemeLocalization from "./locales/ThemeLocalization";

import { ButtonContextProvider } from "./context/ButtonContext";
import ThemeLocalization from "./locales/ThemeLocalization";
import "./index.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Theme>
        <ThemeLocalization>
          <ButtonContextProvider>
            <LanguageContextProvider>
              <Header />

              <Outlet />
              <Footer />
            </LanguageContextProvider>
          </ButtonContextProvider>
        </ThemeLocalization>
      </Theme>
    </Suspense>
  );
}

export default App;
