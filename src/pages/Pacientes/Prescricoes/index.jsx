
import Superiorbar from "../../../components/superiorbar";
import Logoprescricao from "../../../assets/logoprescricao.svg";
import Sidebarpacientes from "../../../components/sidebarpacientes";

import * as S from "./styles";

export default function Prescricoes() {
    return (
        <S.Container>
            <S.Sidebar>
                <Sidebarpacientes />
            </S.Sidebar>
            <S.Main>
                    <S.Header>
                        <Superiorbar />
                    </S.Header>
        
                <S.Content>
                    <S.LogoContainer>
                        <img src={Logoprescricao} alt="logoprescricao" />
                        <h1 className="title">Prescrição Médica</h1>
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
                                <strong>Data da Prescrição:</strong> 27/11/2024
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
                        <h2>Medicamentos</h2>

                        <S.List> 
                        <ul>
                            <li>AAS 100 mg, 1 comprimido. de 12 em 12 horas.</li>
                            <li>Digoxina 0,5 mg, 1 comprimido de 24 em 24 horas.</li>
                        </ul>
                        </S.List>
                        
                        <h2>Observações</h2>
                        <S.List>
                        <ul>
                            <li>Esquema de soro: correr durante 8 horas.</li>
                            <li>Repouso relativo no leito.</li>
                        </ul>
                        </S.List>
                    </S.TextContext>

                    <S.FooterContent>
                        <p>
                            <strong>Dr. Roberto Lima</strong>
                        </p>
                        <p>CRM: PE-123456</p>
                        <p>Especialidade: Clínica Geral</p>
                        <p>Contato: (81) 97545-4321</p>
                        <p>Email: roberto.lima@clinicaficticia.com</p>
                    </S.FooterContent>
                    
                </S.Content>
                
                <S.ButtonsContainer>
                    <S.Button className="imprimir">Imprimir</S.Button>
                    <S.Button className="imprimir">Enviar</S.Button>
                </S.ButtonsContainer>
            </S.Main>
        </S.Container>
    );
}
