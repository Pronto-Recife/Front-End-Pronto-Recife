import { useState } from "react";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import * as S from "./style";
import Modalcancel from "../../../components/modalcancel";

export function HistoricoConsultas() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const CancelConsulta = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Consulta cancelada com sucesso!");
      setLoading(false);
      setOpenModal(false);
    }, 2000);
  };

  return (
    <S.Container>
      <S.Sidebar>
        <Sidebarpacientes />
      </S.Sidebar>

      <S.Header>
        <Superiorbar />
      </S.Header>

      <S.Main>
        <h1>Histórico de Consultas</h1>

        <S.List>
          <S.ListItem>
            <S.Consulta>
              <S.Info>
                <p>
                  <strong>Nome:</strong> Nome do Paciente
                </p>
                <p>
                  <strong>Profissional:</strong> Dr. Roberto Lima
                </p>
                <p>
                  <strong>Data:</strong> 10-10-2024
                </p>
                <p>
                  <strong>Horário:</strong> 23:59 / 11:59 PM
                </p>
              </S.Info>

              <S.Footer>
                <p>
                  <strong>CRM:</strong> PE-123456
                </p>
                <p>
                  <strong>Especialidade:</strong> Clínica Geral
                </p>
                <p>
                  <strong>Contato:</strong> (81) 97545-4321
                </p>
                <p>
                  <strong>Email:</strong> roberto.lima@clinicaficticia.com
                </p>
              </S.Footer>
            </S.Consulta>
            <S.Btn>
              <S.Button>Reagendar Consulta</S.Button>
              <S.ButtonCancel
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Cancelar Consulta
              </S.ButtonCancel>

              <Modalcancel
                isOpen={openModal}
                setModalClose={() => setOpenModal(false)}
                loading={loading}
                CancelConsulta={CancelConsulta}
              />
            </S.Btn>
          </S.ListItem>
        </S.List>
      </S.Main>
    </S.Container>
  );
}
