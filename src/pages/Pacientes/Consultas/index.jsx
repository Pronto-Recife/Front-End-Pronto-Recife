import Footerbar from "../../../components/footerbar";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./styles";
import { Dbcard } from "../../../components/dbcard";
import { BriefcaseMedical , Video  } from 'lucide-react'

export default function Consultas() {
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
            title="Agendar Especialista" 
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
