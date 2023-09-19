import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import { HomeAsync, AboutAsync } from "../pages";
import { Products } from "../pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      { path: "/", element: <HomeAsync /> },
      { path: "/products", element: <Products /> },
      { path: "/about-us", element: <AboutAsync /> },
    ],
  },
]);

export default router;
