import React, { useState } from "react";
import * as S from "./styles";
import { api } from "../../service/api";

const Spinner = () => <div className="spinner"></div>;

const formatarData = (dataISO) => {
  const [date, time] = dataISO.split(" ");
  const [year, month, day] = date.split("-");
  const dataFormatada = `${day}/${month}/${year} ${time}`;
  console.log("Data formatada:", dataFormatada); // Log da data formatada
  return dataFormatada; 
    
};

export default function Modalconsulta({
  isOpen,
  setModalClose,
  dataSelecionada,
  medicoSelecionado,
  medicoNome,
  horarioSelecionado,
}) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const agendarConsulta = async () => {
    if (!dataSelecionada || !medicoSelecionado || !horarioSelecionado) {
      setErrorMessage("Preencha todos os dados antes de confirmar!");
      console.log("Erro: Dados não preenchidos.");
      return;
    }

    console.log("Dados antes de formatar:", dataSelecionada, horarioSelecionado); // Log dos dados recebidos

    const dataFormatada = formatarData(`${dataSelecionada} ${horarioSelecionado}`);

    setLoading(true);
    try {
      const response = await api.post("/consulta/create", {
        dataConsulta: dataFormatada,
        medicoId: medicoSelecionado,
      });

      console.log("Resposta da API:", response.data); // Log da resposta da API

      alert("Consulta agendada com sucesso!");
      setModalClose(false);
    } catch (error) {
      console.log("Erro ao agendar consulta:", error); // Log do erro
      setErrorMessage("Ocorreu um erro ao agendar a consulta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <S.Container>
      <section className="modal">
        <header>
          <h2>Detalhes da Consulta</h2>
        </header>
        <main>
          <div>
            <label>Data da consulta: </label>
            <span>{dataSelecionada}</span>
          </div>
          <div>
            <label>Nome do médico: </label>
            <span>{medicoNome}</span>
          </div>
          <div>
            <label>Horário agendado: </label>
            <span>{horarioSelecionado}</span>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </main>
        <footer>
          <button
            className="confirmar"
            onClick={agendarConsulta}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Confirmar"}
          </button>
          <button className="cancelar" onClick={() => setModalClose(false)}>
            Cancelar
          </button>
        </footer>
      </section>
    </S.Container>
  );
}