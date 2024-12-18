import { useNavigate } from "react-router-dom";
import { Dbcard } from "../../../components/dbcard";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./styles";
import {
  TestTubeDiagonal,
  ScrollText,
  TriangleAlert,
  Navigation,
  BriefcaseMedical,
} from "lucide-react";

import Agua from "./imagens/agua.jpeg";
import Alimentacao from "./imagens/alimentacao.jpeg";
import Clinicas from "./imagens/clinicas.jpeg";
import Farmacia from "./imagens/farmacia.jpeg";


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

        <S.CardContainerAtalhos>
          <Dbcard
            onClick={() => navigation("/agendamento")}
            title="Agendar Especialista"
            icon={<BriefcaseMedical />}
          />
          <Dbcard title="Exames Pendentes" icon={<TestTubeDiagonal />} />
          <Dbcard title="Prescrições Ativas" icon={<ScrollText />} />
          <Dbcard title="Alertas de Saúde" icon={<TriangleAlert />} />
        </S.CardContainerAtalhos>

        <h1>Descubra</h1>
        <S.List>
          <S.Item>
            <img src={Clinicas} alt="Clinicas" />
            <h4>Cadastro Nacional de Estabelecimentos de Saúde</h4>
            <span>O CNES reúne informações detalhadas sobre todos os estabelecimentos de saúde no Brasil, permitindo o planejamento e a gestão eficiente dos serviços de saúde pública e privada no país.<br /> Clique para saber mais. </span>
          </S.Item>
          <S.Item>
            <img src={Agua} alt="Agua" />
            <h4>Sistema de Informação da Vigilância da Qualidade da Água</h4>
            <span>O SISAGUA monitora a qualidade da água consumida pela população, garantindo a segurança hídrica e prevenindo doenças relacionadas ao consumo de água contaminada.<br /> Clique para saber mais.</span>
          </S.Item>
          <S.Item>
            <img src={Alimentacao} alt="Alimentacao" />
            <h4>Sistema de Vigilância Alimentar e Nutricional no Brasil</h4>
            <span>O SISVAN coleta e analisa dados sobre o estado nutricional da população brasileira, contribuindo para a promoção uma alimentação saudável e combate à desnutrição e obesidade.<br /> Clique para saber mais.</span>
          </S.Item>
          
          <S.Item>
            <img src={Farmacia} alt="Farmacia" />
            <h4>Base Nacional de Dados da Assistência Farmacêutica</h4>
            <span>A BNDAF organiza dados sobre a assistência farmacêutica, assegurando o acompanhamento da distribuição de medicamentos e o acesso da população a tratamentos essenciais. <br /> Clique para saber mais.</span>
          </S.Item>
        </S.List>
        
        <h1>Portal de Serviços </h1>
        <S.Services>

          <S.ServiceItem>
            <h1 onClick={() => navigation("/medicamentos")}> medicamentos </h1>
          </S.ServiceItem>

        </S.Services>
      </S.Main>
    </S.Container>
  );
}
