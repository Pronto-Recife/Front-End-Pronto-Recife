import Footerbar from "../../../components/footerbar";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import Logoprescricao from "../../../assets/logoprescricao.svg";
import { Search } from "lucide-react";

import * as S from "./style";

export default function Psrelatorios() {
    return (
        <S.Container>
            <S.Sidebar>
                <Sidebarprofissionais />
            </S.Sidebar>
            <S.Main>
                <S.Header>
                    <Superiorbar />
                </S.Header>
                <S.SearchSection>
                    <S.SearchBar>
                        <input
                            className="box"
                            type="text"
                            placeholder="CPF do Paciente..."
                        />
                        <button className="searchbutton" type="submit">
                            <Search size={24} color="#161B68" />
                        </button>
                    </S.SearchBar>
                </S.SearchSection>
                <S.Content>
                    <S.LogoContainer>
                        <img src={Logoprescricao} alt="logoprescricao" />
                        <h1 className="title">Relatório Médico</h1>
                    </S.LogoContainer>
                    <S.TextContext>
                        <div className="header-content">
                            <p>
                                <strong>Paciente:</strong> Maria Lúcia da Silva
                            </p>
                            <p>
                                <strong>Data de Nascimento:</strong> 07/04/1957
                            </p>
                            <p>
                                <strong>Data do Relatório:</strong> 27/11/2024
                            </p>
                            <p>
                                <strong>Médico Responsável:</strong> Dr. Roberto Lima
                            </p>
                            <p>
                                <strong>Especialidade Clínica:</strong> Geral
                            </p>
                            <p>
                                <strong>Número do Prontuário:</strong> 1715
                            </p>
                        </div>
                        <h2>Queixa Principal</h2>
                        <p>
                            A paciente relata dores abdominais recorrentes nas últimas semanas.
                            Outros exames mencionados incluem exames hepáticos e posse de apetite.
                        </p>
                        <h2>Histórico Clínico</h2>
                        <p>
                            A paciente possui histórico de hipertensão controlada, gastrite
                            crônica. Medicamentos atuais incluem Losartana, Omeprazol e Captoril.
                            Procedimentos anteriores incluem ultrassom de vias urinárias em 2018.
                        </p>
                        <h2>Exame Físico</h2>
                        <p>
                            <strong>Temperatura Corporal:</strong> 37.2°C
                        </p>
                        <p>
                            <strong>Pressão Arterial:</strong> 120/80 mmHg
                        </p>
                        <p>
                            <strong>Frequência Cardíaca:</strong> 72 bpm
                        </p>
                        <p>
                            <strong>Frequência Respiratória:</strong> 18 rpm
                        </p>
                        <h2>Diagnóstico</h2>
                        <p>
                            Baseado nos sintomas relatados e exames realizados, o diagnóstico
                            preliminar é de gastrite associada a disfunção hepática leve.
                        </p>
                        <h2>Conduta e Tratamento</h2>
                        <p>
                            Recomenda-se a seguinte conduta: omeprazol 20 mg, 1x ao dia, por 30
                            dias, retorno em consulta após 30 dias.
                        </p>
                    </S.TextContext>

                    <S.FooterContent>
                    <p>
                        <strong>Dr. Lucas Ferreira Mendes</strong>
                    </p>
                    <p>CRM: PE-123456</p>
                    <p>Especialidade Clínica Geral</p>
                    <p>Contato: (81) 97545-4321</p>
                    <p>Email: lucas.mendes@clinicaficticia.com</p>
                </S.FooterContent>
                    
                </S.Content>
                
                <S.ButtonsContainer>
                        <S.Button className="imprimir">Imprimir</S.Button>
                        <S.Button className="enviar-email">Enviar por Email</S.Button>
                    </S.ButtonsContainer>
            </S.Main>
        </S.Container>
    );
}
