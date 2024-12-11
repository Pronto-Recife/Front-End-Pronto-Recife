import * as S from "./style";
import Sidebarpacientes from "../../components/sidebarpacientes";
import Superiorbar from "../../components/superiorbar";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { api } from "../../service/api";
import Modalconsulta from "../../components/modalconsulta";
import { jwtDecode } from "jwt-decode";
import {TOKEN_STORAGE} from "../../constants/TOKEN_STORAGE"

const formatarData = (dataISO) => {
  const [date, time] = dataISO.split(" ");
  const [year, month, day] = date.split("-");
  const dataFormatada = `${day}/${month}/${year} ${time}`;
  console.log("Data formatada:", dataFormatada); 
  return dataFormatada;
};

const getUserIdFromToken = () => {
  const token =  localStorage.getItem(TOKEN_STORAGE);
  if(!token){
    return "";
  }

  const {sub} = jwtDecode(token)
  return sub;
}

export default function AgendamentoConsultas() {
  const navigation = useNavigate();

  const [dataSelecionada, setDataSelecionada] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [consulta, setConsulta] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [medicoSelecionado, setMedicoSelecionado] = useState("");
  const [medicos, setMedicos] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  async function fetchMedicos() {
    try {
      const response = await api.get("/medico");
      console.log("Médicos retornados:", response.data);
      setMedicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
      alert("Ocorreu um erro ao buscar médicos.");
    }
  }

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

  const handleHorarioDisponivel = (medicoIdSelecionado) => {
    const formatarData = (data) => {
      const [day, month, year] = data.split("/");
      return `${year}-${month}-${day}`;
    };

    const horariosMarcados = consulta
      .filter((item) => {
        const dataConsultaFormatada = formatarData(
          item.dataConsulta.split(" ")[0]
        );
        return (
          dataConsultaFormatada === dataSelecionada &&
          item.medicoId === medicoIdSelecionado
        );
      })
      .map((item) => item.dataConsulta.split(" ")[1].slice(0, 5));

    const horariosFiltrados = horarios.filter(
      (hora) => !horariosMarcados.includes(hora)
    );
    setHorariosDisponiveis(horariosFiltrados);
  };

  useEffect(() => {
    fetchMedicos();
    handleConsulta();
    gerarHorarios();
  }, []);

  useEffect(() => {
    if (dataSelecionada && medicoSelecionado) {
      handleHorarioDisponivel(medicoSelecionado);
    }
  }, [dataSelecionada, medicoSelecionado]);

  const [openModal, setOpenModal] = useState(false);

  const agendarConsulta = async () => {
    if (!dataSelecionada || !medicoSelecionado || !horarioSelecionado) {
      setErrorMessage("Preencha todos os dados antes de confirmar!");
      console.log("Erro: Dados não preenchidos.");
      return;
    }

    console.log(
      "Dados antes de formatar:",
      dataSelecionada,
      horarioSelecionado
    );

    const dataFormatada = formatarData(
      `${dataSelecionada} ${horarioSelecionado}`
    );

    try {
      const pacienteId = getUserIdFromToken();
      const response = await api.post("/consulta/create", {
        dataConsulta: dataFormatada,
        medicoId: medicoSelecionado,
        pacienteId: pacienteId ? pacienteId : null
      });

      console.log("Resposta da API:", response.data); 

      alert("Consulta agendada com sucesso!");
    } catch (error) {
      console.log("Erro ao agendar consulta:", error);
      alert("Ocorreu um erro ao agendar a consulta. Tente novamente.");
    }
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
              <option value="" disabled>
                Selecione um médico
              </option>
              {medicos.map((medico) => (
                <option key={medico.id} value={medico.id}>
                  {medico.nomeCompleto}
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
                <button
                  key={index}
                  onClick={() => {
                    setHorarioSelecionado(horario);
                    setOpenModal(true);
                  }}
                >
                  {horario} {}
                </button>
              ))}
            </S.Horarios>

            <Modalconsulta
              isOpen={openModal}
              setModalClose={() => setOpenModal(false)}
              horariosDisponiveis={horariosDisponiveis}
              dataSelecionada={dataSelecionada}
              setDataSelecionada={setDataSelecionada}
              medicoSelecionado={medicoSelecionado}
              setMedicoSelecionado={setMedicoSelecionado}
              medicoNome={
                medicos.find((medico) => medico.id === medicoSelecionado)
                  ?.nomeCompleto
              }
              horarioSelecionado={horarioSelecionado}
              setHorarioSelecionado={setHorarioSelecionado}
            />
          </S.DivMain>

          <S.CardContainer>
            <S.Button onClick={agendarConsulta}>Agendar Consulta</S.Button>
            <S.ButtonCancel onClick={() => console.log(getUserIdFromToken())}>
              Cancelar Consulta
            </S.ButtonCancel>
            <Modalconsulta />
          </S.CardContainer>
        </S.DivContainer>
      </S.Main>
    </S.Container>
  );
}
