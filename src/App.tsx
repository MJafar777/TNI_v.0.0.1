import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/theme";
import { Header, Footer } from "./layouts";
import { Loader } from "./components";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Theme>
        <Header />
        <Outlet />
        <Footer />
      </Theme>
    </Suspense>
  );
}

export default App;
