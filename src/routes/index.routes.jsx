import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

export const paginas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);
