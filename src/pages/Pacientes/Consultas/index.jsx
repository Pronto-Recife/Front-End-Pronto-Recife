import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./styles";
import { Dbcard } from "../../../components/dbcard";
import { BriefcaseMedical , Video  } from 'lucide-react'
import { useNavigate } from "react-router-dom";

export default function Consultas() {

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
            title="Consultas Online 24h" 
            icon={<Video  />} 
          />
        </S.CardContainer>

        <S.FiltersContainer>
          <div>
            <label>Estado</label>
            <select>
              <option>Realizadas</option>
              <option>Agendadas</option>
            </select>
          </div>
          <div>
            <label>Ano</label>
            <select>
              <option>2024</option>
              
            </select>
          </div>
        </S.FiltersContainer>

       
        <S.HistoryText>
          Não encontrei um histórico de consultas do paciente selecionado.
        </S.HistoryText>
      </S.Main>

      
    </S.Container>
  );
}
