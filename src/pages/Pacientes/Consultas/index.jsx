import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./styles";
import { Dbcard } from "../../../components/dbcard";
import { BriefcaseMedical , PencilRuler  } from 'lucide-react'
import { useNavigate } from "react-router-dom";

export function Consultas() {

  const navigation = useNavigate();

  return (
    <S.Container>
      <S.Sidebar>
        <Sidebarpacientes />
      </S.Sidebar>

      <S.Header>
        <Superiorbar />
      </S.Header>

      <S.Main>
        <h1>Consultas</h1>

        <S.CardContainer>
        <Dbcard 
            onClick={() => navigation("/agendamento")}
            title="Agendar Clínico Geral" 
            icon={<BriefcaseMedical  />} 
          />

          <Dbcard 
            onClick={() => navigation("/historicoconsultas")}
            title="Consultas Agendadas" 
            icon={<PencilRuler  />} 
          />
          
        </S.CardContainer>

      </S.Main>

      
    </S.Container>
  );
}
