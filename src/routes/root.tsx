import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import { HomeAsync, AboutAsync } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      { path: "/", element: <HomeAsync /> },
      { path: "/about-us", element: <AboutAsync /> },
    ],
  },
]);

export default router;
