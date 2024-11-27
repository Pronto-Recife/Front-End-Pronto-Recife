import { Search, CirclePlus } from "lucide-react";
import Footerbar from "../../../components/footerbar";
import Sidebarprofissionais from "../../../components/sidebarprofissionais";
import Superiorbar from "../../../components/superiorbar";
import Foto from "../../../assets/Paciente/foto.svg";
import * as S from "./styles";

export default function Psprescricoes() {
    return (
        <>
            <Superiorbar />
            <Sidebarprofissionais />

            <S.Container>
                <S.Header>
                    <h1>Prescrição médica</h1>
                    <S.Container>
                        <S.SearchInput type="text" placeholder="Id do paciente, Nº do Prontuário" />
                        <Search size={24} color="#161B68" /> {/* Ícone de lupa */}
                    </S.Container>
                </S.Header>

                <S.ProfileSection>
                    <img src={Foto} alt="Foto de perfil" />
                    <S.Info>
                        <h2>Maria Lucia da Silva</h2>
                        <p><strong>Nº Prescrição:</strong> 1115</p>
                        <p><strong>Paciente:</strong> Maria Lucia Da Silva</p>
                        <p><strong>Idade:</strong> 68</p>
                        <p><strong>Sexo:</strong> Feminino</p>
                        <p><strong>Motivo do internamento:</strong> BCP</p>
                        <p><strong>Diagnóstico:</strong> AVC PRÉVIO + HEMIPLEGIA D</p>
                        <p><strong>Alergias:</strong> Nada consta</p>
                        <p><strong>Convênio:</strong> Público</p>
                        <p><strong>Médico:</strong> Dr. Roberto Lima</p>
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
                        <h4>Observações</h4>
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
                        <h4>Observações</h4>
                        <ul>
                            <li>Esquema de soro: correr durante 8 horas.</li>
                            <li>Repouso relativo no leito.</li>
                        </ul>
                    </S.PrescriptionCard>
                </S.Prescriptions>

                <S.VejaMaisButton>
                    <CirclePlus size={24} color="#161B68" /> {/* Ícone CirclePlus */}
                    Veja mais
                </S.VejaMaisButton>
            </S.Container>

            <footer>
                <Footerbar />
            </footer>
        </>
    );
}
