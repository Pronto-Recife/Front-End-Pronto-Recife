import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { Home } from "../pages/Home";
import Esquecisenha from "../pages/Esquecisenha";
import Inserircodigo from "../pages/Esquecisenha/Inserircodigo";
import Novasenha from "../pages/Esquecisenha/Novasenha";
import Sucesso from "../pages/Esquecisenha/Sucesso";
import CadastroPaciente from "../pages/Cadastro/CadastroPaciente";
import CadastroPsaude from "../pages/Cadastro/CadastroPsaude";
import CadastroMedico from "../pages/Cadastro/CadastroMedico";
import Default from "../pages/Default";



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
    path: "/cadastromedico",
    element:<CadastroMedico />
  },
  {
    path: "/cadastropsaude",
    element:<CadastroPsaude />
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
  {
    path: "/default",
    element: <Default />
  },

  
]);
