import React, { useState } from "react";
import * as S from "./styles";

const Spinner = () => <div className="spinner"></div>;

export default function Modalcancel({ isOpen, setModalClose }) {
  const [loading, setLoading] = useState(false);

  const CancelConsulta = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Consulta cancelada com sucesso!"); 
      setLoading(false);
      setModalClose(false);
    }, 2000); 
  };

  if (!isOpen) return null;

  return (
    <S.Container>
      <section className="modal">
        <h2>Tem certeza que deseja cancelar esta consulta?</h2>
        <div className="buttons">
          <button
            className="confirmar"
            onClick={CancelConsulta}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Confirmar"}
          </button>
          <button className="cancelar" onClick={() => setModalClose(false)}>
            Cancelar
          </button>
        </div>
      </section>
    </S.Container>
  );
}
