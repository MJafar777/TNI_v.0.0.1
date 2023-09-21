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
      { path: "/products", element: <ProductsAsync /> },
      { path: "/about-us", element: <AboutAsync /> },
      { path: "/login", element: <LoginAsync /> },
    ],
  },
]);

export default router;
