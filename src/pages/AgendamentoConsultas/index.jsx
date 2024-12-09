import * as S from "./style";
import Sidebarpacientes from "../../components/sidebarpacientes";
import Superiorbar from "../../components/superiorbar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from "../../service/api";

export default function AgendamentoConsultas() {
  const navigation = useNavigate();

  const [dataSelecionada, setDataSelecionada] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [consulta, setConsulta] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [medicoSelecionado, setMedicoSelecionado] = useState("");
  const [medicos, setMedicos] = useState([
    { id: 1, nome: "Dr. João Silva", especialidade: "Clínico Geral" },
    { id: 2, nome: "Dr. Ana Souza", especialidade: "Cardiologista" },
    { id: 3, nome: "Dr. Carlos Lima", especialidade: "Pediatra" },
  ]);

  async function handleConsulta() {
    try {
      const response = await api.get("/consulta/getAll");
      setConsulta(response.data);
    } catch (error) {
      console.error("Erro ao buscar consultas", error);
      alert("Ocorreu um erro ao buscar consultas.");
    }
  }

  const gerarHorarios = () => {
    const inicio = "08:00";
    let h1 = parseInt(inicio.substring(0, 2));
    let m1 = parseInt(inicio.substring(3, 5));

    const fim = "17:00";
    let h2 = parseInt(fim.substring(0, 2));
    let m2 = parseInt(fim.substring(3, 5));

    let tempoConsultaMin = 30;
    let turnoManhaMin = (h2 - h1) * 60 + (m2 - m1);
    let totalConsulta = Math.floor(turnoManhaMin / tempoConsultaMin);

    let horariosGerados = [];

    for (let i = 0; i < totalConsulta; i++) {
      horariosGerados.push(
        String(h1).padStart(2, "0") + ":" + String(m1).padStart(2, "0")
      );

      m1 += tempoConsultaMin;

      if (m1 >= 60) {
        h1 += Math.floor(m1 / 60);
        m1 = m1 % 60;
      }
    }

    setHorarios(horariosGerados);
  };

  const handleHorarioDisponivel = () => {
    console.log("Data Selecionada:", dataSelecionada);
    console.log("Consultas carregadas:", consulta);
  
    const horariosMarcados = consulta
      .filter((item) => {
        // Convertendo data da consulta para o formato YYYY-MM-DD
        const dataConsulta = item.dataConsulta.split(" ")[0];
        const [day, month, year] = dataConsulta.split("/"); // Exemplo: "08/12/2024"
        const formattedDate = `${year}-${month}-${day}`; // Formato "YYYY-MM-DD"
        console.log("Data da consulta formatada:", formattedDate);
  
        // Comparando as datas
        return formattedDate === dataSelecionada;
      })
      .map((item) => {
        const horaConsulta = item.dataConsulta.split(" ")[1].slice(0, 5); // Extrair hora
        return horaConsulta;
      });
  
    console.log("Horários marcados:", horariosMarcados);
  
    const filtrados = horarios.filter((hora) => !horariosMarcados.includes(hora));
    console.log("Horários disponíveis:", filtrados);
  
    setHorariosDisponiveis(filtrados);
  };
  
  
  
  useEffect(() => {
    async function fetchConsultas() {
      try {
        const response = await api.get("/consulta/getAll");
        console.log("Consultas retornadas:", response.data); // Verifique o formato aqui
        setConsulta(response.data);
      } catch (error) {
        console.error("Erro ao buscar consultas", error);
      }
    }
    fetchConsultas();
  }, []);
  


  useEffect(() => {
    gerarHorarios();
    handleConsulta();
  }, []);

  useEffect(() => {
    if (consulta.length > 0 && dataSelecionada) {
      handleHorarioDisponivel();
    }
  }, [consulta, dataSelecionada]);

  const handleCancelar = () => {
    console.log("Consulta cancelada.");
  };

  const handleReagendar = () => {
    console.log("Consulta reagendada.");
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
            <input
              type="date"
              value={dataSelecionada}
              onChange={(e) => setDataSelecionada(e.target.value)}
            />

            <p>Horários Disponíveis:</p>
            <S.Horarios>
              {horariosDisponiveis.map((horario, index) => (
                <button key={index}>{horario}</button>
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
