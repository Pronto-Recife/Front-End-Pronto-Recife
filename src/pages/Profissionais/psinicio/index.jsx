import { Dbcard } from "../../../components/dbcard";
import Footerbar from "../../../components/footerbar";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import SidebarProfissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./style";
import { Stethoscope, TestTubeDiagonal, ScrollText, TriangleAlert } from 'lucide-react';

export default function Psnicio() {
  return (
    <S.Container>
      <S.Sidebar>
        <SidebarProfissionais />
      </S.Sidebar>

      <S.Header>
        <Superiorbar />
      </S.Header>

      <S.Main>
        <h1>Seus atalhos</h1>

        <S.CardContainer>
          <Dbcard 
            title="Agendar Especialista" 
            icon={<Stethoscope />} 
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
