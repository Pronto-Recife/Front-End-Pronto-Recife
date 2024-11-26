import { Dbcard } from "../../../components/dbcard";
import Footerbar from "../../../components/footerbar";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./styles";
import { Stethoscope, TestTubeDiagonal, ScrollText, TriangleAlert } from 'lucide-react';

export default function Inicio() {
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

      <S.Footer>
        <Footerbar />
      </S.Footer>
    </S.Container>
  );
}
