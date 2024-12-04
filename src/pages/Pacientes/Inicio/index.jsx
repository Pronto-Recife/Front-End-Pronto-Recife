import { useNavigate } from "react-router-dom";
import { Dbcard } from "../../../components/dbcard";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./styles";
import { TestTubeDiagonal, ScrollText, TriangleAlert, Navigation, BriefcaseMedical } from 'lucide-react';

export default function Inicio() {

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
        <h1>Seus atalhos</h1>

        <S.CardContainer>
        <Dbcard 
            onClick={() => navigation("/agendamento")}
            title="Agendar Especialista" 
            icon={<BriefcaseMedical  />} 
          />
          <Dbcard 
            title="Exames Pendentes" 
            icon={<TestTubeDiagonal />} 
          />
          <Dbcard 
            title="Prescrições Ativas" 
            icon={<ScrollText />} 
          />
          <Dbcard 
            title="Alertas de Saúde" 
            icon={<TriangleAlert />} 
          />
        </S.CardContainer>
      </S.Main>

  
    </S.Container>
  );
}
