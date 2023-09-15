import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./layouts";
import Theme from "./styles/theme";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Theme>
        <Header />
        <Outlet />
        <Footer />
      </Theme>
    </Suspense>
  );
}

export default App;
