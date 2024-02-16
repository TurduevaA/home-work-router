import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { About } from "../pages/About";
import { Layout } from "../layout/Layout";
import { Phones } from "../pages/Phones";
import { Profile } from "../pages/Profile";
import { PhonesItem } from "../pages/PhonesItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phones/*",
        element: <Phones />,
      },
      {
        path: "/phones/:newId",
        element: <PhonesItem />,
      },

      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
