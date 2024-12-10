import React from "react";
import * as S from "./style";
import { useState } from "react";


export default function Modalconsulta({ isOpen,
  setCloseModal,
  setModalClose,
  horariosDisponiveis,
  dataSelecionada,
  medicoSelecionado,
  medicoNome,
  horarioSelecionado
}) {

  // const agendarConsulta = async () => {
  //   try {
  //     const response = await api.post("/consulta/agendar", {
  //       dataConsulta: `${dataSelecionada} ${horarioSelecionado}`,
  //       medicoId: medicoSelecionado,
  //     });

  //     // Sucesso ao agendar consulta
  //     console.log("Consulta agendada com sucesso!", response.data);
  //     alert("Consulta agendada com sucesso!");
  //     setModalClose();  // Fecha o modal após sucesso
  //   } catch (error) {
  //     // Caso ocorra algum erro
  //     console.error("Erro ao agendar consulta:", error);
  //     alert("Ocorreu um erro ao agendar a consulta.");
  //   }
  // };

  if (isOpen) {
    return (
      <S.Container>
        <section className="modal">

          <div className="text">
            <div className="data">
              <label >Data da consulta: {dataSelecionada}</label>

            </div>

            <div className="medico">
              <label >Nome do medico: {medicoNome}</label>

            </div>

            <div className="horario">
              <label >Horario agendado: {horarioSelecionado}</label>

            </div>




          </div>



          <h3>Deseja confirmar a Consulta?</h3>

          <div className="grup">


            <button className="confirmar">Confirmar</button>
            <button className="cancelar" onClick={() => setModalClose(false)}
            >Cancelar</button>

          </div>

        </section>

      </S.Container>
    );
  }



  return null;
}
