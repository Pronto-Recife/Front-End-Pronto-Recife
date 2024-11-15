import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { Home } from "../pages/Home";

export const paginas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element:<Login />
  }
]);
