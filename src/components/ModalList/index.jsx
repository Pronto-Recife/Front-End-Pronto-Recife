import React from "react";
import * as S from "./styles";
import Icon from "../../assets/X.svg";

export default function ModalList({ isOpen, setModalClose, setModal }) {
  if (isOpen) {
    
    return (
      <S.Container>
        <section className="modal">

          <div className="form">
            <button
              className="close-button "
              onClick={() => setModalClose(false)} >

              <img className="Icon" src={Icon} alt="" />

            </button>

            <label>Nome:</label>
            <input className="input" type="text" id="name" maxLength="100" />

            <label>E-mail:</label>
            <input className="input" type="email" id="email" />


            <div className="info">
              <strong>Cadastrado em:</strong>
              <input className="input" type="date" id="cadastro" />
            </div>

            <div className="info">
              <strong>CPF:</strong>

              <input
                className="input"
                type="text"
                placeholder="000.000.000-00"
                maxLength="14"
              />
            </div>

            <div className="info">
              <label>Telefone:</label>
              <input
                className="input"
                type="tel"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="info">
              <label>Celular:</label>
              <input
                className="input"
                type="tel"
                placeholder="(00) 00000-0000"
              />
            </div>
            
          </div>
          

          <div className="form-actions">

            <button className="edit">
              <strong>Editar</strong>
            </button>
            <button className="del">
              <strong>Deletar</strong>
            </button>
          </div>
        </section>
      </S.Container>
    );
  }
  return null;
}
