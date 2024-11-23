import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { Home } from "../pages/Home";
import Esquecisenha from "../pages/Esquecisenha";
import Inserircodigo from "../pages/Esquecisenha/Inserircodigo";
import Novasenha from "../pages/Esquecisenha/Novasenha";
import Sucesso from "../pages/Esquecisenha/Sucesso";
import CadastroPaciente from "../pages/Cadastro/CadastroPaciente";



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
  },
  {
    path: "/cadastropaciente",
    element:<CadastroPaciente />
  },
  {
    path: "/esquecisenha",
    element:<Esquecisenha />
  },

  {
    path: "/inserircodigo",
    element:<Inserircodigo />
  },

  {
    path: "/novasenha",
    element: <Novasenha />
  },

  {
    path: "/sucesso",
    element: <Sucesso />
  },

]);
