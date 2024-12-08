import React from "react";
import * as S from "./styles";
import Icon from "../../assets/X.svg";

export default function ModalList({ isOpen, setModalClose, setModal }) {
  if (isOpen) {
    return (
      <S.Container>
        <section className="modal">
          <button class="close-button" onClick={() => setModalClose(true)}>
            <img className="img" src={Icon} alt="" />
          </button>

          <div class="form">
            <label> Nome: </label>
            <input className="input" type="text" />

            <label>E-mail: </label>
            <input className="input" type="email" />
          </div>

          <div className="form-group">
            <div className="form-cad">
              <strong>Cadastrado em:</strong>
              <input className="Input" type="text" />
            </div>

            <div className="form-cpf">
              <strong>CPF: </strong>
              <input className="Input" type="" />
            </div>
          </div>

          <div className="form-contato">
            <div className="form-tel">
              <label>Telefone</label>
              <input className=" digite" type="tel" />
            </div>
            <div className="form-cel">
              <label>Celular </label>
              <input className=" digite" type="text" />
            </div>
          </div>

          <div class="form-actions">
            <button className="edit">
              {" "}
              <strong> Editar</strong>{" "}
            </button>
            <button className="del">
              {" "}
              <strong>Deletar</strong>{" "}
            </button>
          </div>
        </section>
      </S.Container>
    );
  }
  return null;
}
