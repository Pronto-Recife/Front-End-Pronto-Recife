import * as S from "./style";
import Sidebarpacientes from "../../components/sidebarpacientes";
import Superiorbar from "../../components/superiorbar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function AgendamentoConsultas() {
  const navigation = useNavigate();

  const [horarios, setHorarios] = useState([]);
  const [medicoSelecionado, setMedicoSelecionado] = useState("");
  const [medicos, setMedicos] = useState([
    { id: 1, nome: "Dr. João Silva", especialidade: "Clínico Geral" },
    { id: 2, nome: "Dr. Ana Souza", especialidade: "Cardiologista" },
    { id: 3, nome: "Dr. Carlos Lima", especialidade: "Pediatra" },
  ]);

  const gerarHorarios = () => {
    const inicio = "08:00";
    const h1 = parseInt(inicio.substring(0, 2));
    const m1 = parseInt(inicio.substring(3, 5));

    const almoco = "12:00";
    const h2 = parseInt(almoco.substring(0, 2));
    const m2 = parseInt(almoco.substring(3, 5));

    const fim = "17:00";
    const h3 = parseInt(fim.substring(0, 2));
    const m3 = parseInt(fim.substring(3, 5));

    let tempoConsultaMin = 30;
    let turnoManhaMin = (h2 - h1) * 60 + (m2 - m1);
    let totalConsulta = Math.floor(turnoManhaMin / tempoConsultaMin);

    let testeH = h1;
    let testeM = m1;

    let horariosDisponiveis = [];

    for (let i = 0; i < totalConsulta; i++) {
      horariosDisponiveis.push(
        String(testeH).padStart(2, "0") + ":" + String(testeM).padStart(2, "0")
      );

      testeM += tempoConsultaMin;

      if (testeM >= 60) {
        testeH += Math.floor(testeM / 60);
        testeM = testeM % 60;
      }
    }

    setHorarios(horariosDisponiveis);
  };

  useEffect(() => {
    gerarHorarios();
  }, []);

  const handleCancelar = () => {
    console.log("Consulta cancelada.");
  };

  const handleReagendar = () => {
    console.log("Consulta reagendada.");
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
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
        <h1>Agendar Consulta</h1>

        <S.DivContainer>
          <S.DivMain>
            <p>Selecione um Médico:</p>
            <select
              value={medicoSelecionado}
              onChange={(e) => setMedicoSelecionado(e.target.value)}
            >
              <option value="">Selecione</option>
              {medicos.map((medico) => (
                <option key={medico.id} value={medico.id}>
                  {medico.nome} - {medico.especialidade}
                </option>
              ))}
            </select>

            <p>Selecione uma Data:</p>
            <input type="date" />

            <p>Horários Disponíveis:</p>
            <S.Horarios>
              {horarios.map((horario, index) => (
                <button isSelected={selectedButton === "inicio"} key={index}>
                  {horario}
                </button>
              ))}
            </S.Horarios>
          </S.DivMain>

          <S.CardContainer>
            <S.Button onClick={handleReagendar}>Reagendar Consulta</S.Button>
            <S.ButtonCancel onClick={handleCancelar}>
              Cancelar Consulta
            </S.ButtonCancel>
          </S.CardContainer>
        </S.DivContainer>
      </S.Main>
    </S.Container>
  );
}
