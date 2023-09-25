import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/theme";
import { Header, Footer } from "./layouts";
import { Loader } from "./components";

import "./locales/i18n";
import { LanguageContextProvider } from "./context/LanguageContext";
// import ThemeLocalization from "./locales/ThemeLocalization";

import { ButtonContextProvider } from "./context/ButtonContext";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ButtonContextProvider>
        <LanguageContextProvider>
          <Theme>
            {/* <ThemeLocalization> */}
            <Header />
            <Outlet />
            <Footer />
            {/* </ThemeLocalization>lineheight */}
          </Theme>
        </LanguageContextProvider>
      </ButtonContextProvider>
    </Suspense>
  );
}

export default App;
