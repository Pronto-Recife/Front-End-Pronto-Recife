import { Search, CirclePlus } from "lucide-react";
import Footerbar from "../../../components/footerbar";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import Maria from "../../../assets/maria.svg";
import * as S from "./styles";

export default function Psprescricoes() {
    return (
        <>
            <Superiorbar />

            <S.Container>
                <S.Sidebar>
                    <Sidebarprofissionais />
                </S.Sidebar>

                <S.MainContent>
                    <S.Header>
                        <h1>Prescrição médica</h1>
                        <S.SearchWrapper>
                            <S.SearchInput type="text" placeholder="Id do paciente, Nº do Prontuário" />
                            <Search size={24} color="#161B68" />
                        </S.SearchWrapper>
                    </S.Header>

                    <S.ProfileSection>
                        <img src={Maria} alt="Foto de perfil" />
                        <S.Info>
                            <div>
                                <p><strong>Nº Prescrição:</strong> 1115</p>
                                <p><strong>Paciente:</strong> Maria Lucia Da Silva</p>
                                <p><strong>Idade:</strong> 68</p>
                                <p><strong>Sexo:</strong> Feminino</p>
                            </div>
                            <div>
                                <p><strong>Motivo do internamento:</strong> BCP</p>
                                <p><strong>Diagnóstico:</strong> AVC PRÉVIO + HEMIPLEGIA D</p>
                                <p><strong>Alergias:</strong> Nada consta</p>
                                <p><strong>Convênio:</strong> Público</p>
                                <p><strong>Médico:</strong> Dr. Roberto Lima</p>
                            </div>
                        </S.Info>
                    </S.ProfileSection>

                    <S.Prescriptions>
                        <S.PrescriptionCard>
                            <h3>Medicamentos</h3>
                            <ul>
                                <li>AAS 100 mg Comprido Similar, <b>Administrar 1 cp</b></li>
                                <li>Digoxina 0,5 mg Comprimido Marca, <b>Administrar 1 cp</b></li>
                            </ul>
                            <h3>Horários</h3>
                            <ul>
                                <li>8:00 - 16h</li>
                                <li>8:00 - 16h</li>
                            </ul>
                            <h3>Observações</h3>
                            <ul>
                                <li>Esquema de soro: correr durante 8 horas.</li>
                                <li>Repouso relativo no leito.</li>
                            </ul>
                        </S.PrescriptionCard>

                        <S.PrescriptionCard>
                            <h3>Medicamentos</h3>
                            <ul>
                                <li>AAS 100 mg Comprido Similar, <b>Administrar 1 cp</b></li>
                                <li>Digoxina 0,5 mg Comprimido Marca, <b>Administrar 1 cp</b></li>
                            </ul>
                            <h3>Horários</h3>
                            <ul>
                                <li>8:00 - 16h</li>
                                <li>8:00 - 16h</li>
                            </ul>
                            <h3>Observações</h3>
                            <ul>
                                <li>Esquema de soro: correr durante 8 horas.</li>
                                <li>Repouso relativo no leito.</li>
                            </ul>
                        </S.PrescriptionCard>

                        <S.VejaMaisButton>
                            <CirclePlus size={24} color="#161B68" />
                            Veja mais
                        </S.VejaMaisButton>
                    </S.Prescriptions>
                </S.MainContent>
            </S.Container>

            <footer>
                <Footerbar />
            </footer>
        </>
    );
}
