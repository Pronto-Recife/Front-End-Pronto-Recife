import { useState } from "react";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import Modal from "../../Modal";
import Logo from "../../../assets/Default/Logo.svg";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function Sair() {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => setShowModal(false);
  const navigate = useNavigate();

  return (
    <>
      <Modal isOpem={showModal}>
        <Container>
          <div className="modal">
            <img className="img" src={Logo} alt="" />

            <h3 className="text">Deseja Realmente Sair?</h3>

            <div className="components">
              <button className="buttons" onClick={() => navigate("/")}>Sair</button>
              <button className="button" onClick={() => navigate(-1)}>
                Cancelar
              </button>
            </div>
          </div>
        </Container>
      </Modal>
    </>
  );
}
