import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { Home } from "../pages/Home";
import Esquecisenha from "../pages/Esquecisenha";
import Inserircodigo from "../pages/Esquecisenha/Inserircodigo";
import Novasenha from "../pages/Esquecisenha/Novasenha";
import Sucesso from "../pages/Esquecisenha/Sucesso";
import CadastroPaciente from "../pages/Cadastro/CadastroPaciente";
import CadastroMedico from "../pages/Cadastro/CadastroMedico";
import Default from "../pages/Default";
import Ops from "../pages/Ops";
import OPS from "../pages/Ops";

// Fluxo de Paciente
import Inicio from "../pages/Pacientes/Inicio";
import { Consultas } from "../pages/Pacientes/Consultas";
import Exames from "../pages/Pacientes/Exames";
import Perfil from "../pages/Pacientes/Perfil";
import DadosCadastrais from "../pages/Pacientes/DadosCadastrais";
import Seguranca from "../pages/Pacientes/Seguranca";
import Ajuda from "../pages/Pacientes/Ajuda";
import Sair from "../pages/Pacientes/Sair";
import Relatorios from "../pages/Pacientes/Relatorios";
import Prescricoes from "../pages/Pacientes/Prescricoes";
import { HistoricoConsultas } from "../pages/Pacientes/historicoConsultas";

// Fluxo de Profissional de Saúde
import Psinicio from "../pages/Profissionais/psinicio";
import Psexames from "../pages/Profissionais/psexames";
import Psprescricoes from "../pages/Profissionais/psprescricoes";
import Psrelatorios from "../pages/Profissionais/psrelatorios";
import Psdadoscadastrais from "../pages/Profissionais/psdadoscadastrais";
import Psseguranca from "../pages/Profissionais/psseguranca";
import Psajuda from "../pages/Profissionais/psajuda";
import Pssair from "../pages/Profissionais/pssair";
import Pspacientes from "../pages/Profissionais/pspacientes";
import AgendamentoConsultas from "../pages/AgendamentoConsultas";

//Barra Superior
import Servicos from "../pages/Servicos";
import Ajudaesup from "../pages/Ajudaesup";

//Dev info
import Usuarios from "../pages/Usuarios";

//Serviços públicos
import Medicamentos from "../pages/APIservicos/medicamentos";
import Laboratoriais from "../pages/APIservicos/laboratoriais";

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
    element: <Login />,
  },
  {
    path: "/cadastromedico",
    element: <CadastroMedico />,
  },

  {
    path: "/cadastropaciente",
    element: <CadastroPaciente />,
  },
  {
    path: "/esquecisenha",
    element: <Esquecisenha />,
  },

  {
    path: "/inserircodigo",
    element: <Inserircodigo />,
  },

  {
    path: "/novasenha",
    element: <Novasenha />,
  },

  {
    path: "/sucesso",
    element: <Sucesso />,
  },
  {
    path: "/default",
    element: <Default />,
  },
  {
    path: "/ops",
    element: <OPS />,
  },

  //Fluxo de Paciente
  {
    path: "/inicio",
    element: <Inicio />,
  },

  {
    path: "/consultas",
    element: <Consultas />,
  },
  {
    path: "/historicoconsultas",
    element: <HistoricoConsultas />,
  },

  {
    path: "/exames",
    element: <Exames />,
  },

  {
    path: "/perfil",
    element: <Perfil />,
  },

  {
    path: "/dadoscadastrais",
    element: <DadosCadastrais />,
  },

  {
    path: "/seguranca",
    element: <Seguranca />,
  },

  {
    path: "/ajuda",
    element: <Ajuda />,
  },

  {
    path: "/sair",
    element: <Sair />,
  },
  {
    path: "/prescricoes",
    element: <Prescricoes />,
  },
  {
    path: "/relatorios",
    element: <Relatorios />,
  },

  //Fluxo de Profissional de Saúde

  {
    path: "/psinicio",
    element: <Psinicio />,
  },

  {
    path: "/pspacientes",
    element: <Pspacientes />,
  },

  {
    path: "/psexames",
    element: <Psexames />,
  },

  {
    path: "/psprescricoes",
    element: <Psprescricoes />,
  },

  {
    path: "/psrelatorios",
    element: <Psrelatorios />,
  },

  {
    path: "/psdadoscadastrais",
    element: <Psdadoscadastrais />,
  },

  {
    path: "/psseguranca",
    element: <Psseguranca />,
  },

  {
    path: "/psajuda",
    element: <Psajuda />,
  },

  {
    path: "/pssair",
    element: <Pssair />,
  },

  //Barra Superior
  {
    path: "/servicos",
    element: <Servicos />,
  },
  {
    path: "/ajudaesup",
    element: <Ajudaesup />,
  },

  {
    path: "/agendamento",
    element: <AgendamentoConsultas />,
  },

  //Dev info
  {
    path: "/usuarios",
    element: <Usuarios />,
  },

  {
    path: "/medicamento",
    element: <Medicamentos />,
  },
  {
    path: "/laboratoriais",
    element: <Laboratoriais />,
  },
]);
