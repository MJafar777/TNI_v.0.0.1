import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/theme";
import { Header, Footer } from "./layouts";
import { Loader } from "./components";

import "./locales/i18n";
import ThemeLocalization from "./locales/ThemeLocalization";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Theme>
        <ThemeLocalization>
          <Header />
          <Outlet />
          <Footer />
        </ThemeLocalization>
      </Theme>
    </Suspense>
  );
}

export default App;
