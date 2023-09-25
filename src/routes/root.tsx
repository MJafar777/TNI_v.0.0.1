import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import { HomeAsync, AboutAsync, ProductsAsync, LoginAsync } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      { path: "/", element: <HomeAsync /> },
      { path: "/login", element: <LoginAsync /> },
      { path: "/about-us", element: <AboutAsync /> },
      { path: "/products", element: <ProductsAsync /> },
    ],
  },
]);

export default router;
