import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./layouts";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
