import Footerbar from "../../components/footerbar/";
import SidebarProfissionais from "../../components/sidebarprofissionais";
import Superiorbar from "../../components/superiorbar";

import { Search, FilePenLine, Check } from "lucide-react";

import Pencil from "../../assets/Usuarios/Pencil.svg";

import * as S from "./styles";

import ModalList from "../../components/ModalList";
import { useState } from "react";

export default function Usuarios() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <S.Container>
      <S.Sidebar>
        <SidebarProfissionais />
      </S.Sidebar>
      <S.Main>
        <S.Header>
          <Superiorbar />
        </S.Header>

        <S.Buton>
          <h1>ID</h1>
          <button className="prof">Profissionais</button>
          <button className="paci">Pacientes</button>

          <S.SearchSection>
            <S.SearchBar>
              <input
                className="box"
                type="text"
                placeholder="ID do Usuário..."
              />
              <button className="searchbutton" type="submit">
                <Search size={24} color="#161B68" />
              </button>
            </S.SearchBar>
          </S.SearchSection>
        </S.Buton>

        <h2 className="Idlist"></h2>

        <section className="list">
          <div className="container">
            <div className="contentButton">
              <button className="idButton">7890</button>
              <button className="idButton">
                <Check size={24} color="#161b68" strokeWidth={3} />
              </button>
            </div>

            <div className="listitem">
              <div className="item">
                <label>Nome: </label>
                <strong>Ananias Nicolau Benevides</strong>
              </div>

              <div className="item">
                <label>E-mail: </label>
                <strong>ananias@gmail.com</strong>
              </div>

              <button className="button" onClick={() => setOpenModal(true)}>
                <img src={Pencil} alt="" />
              </button>

              <div></div>
            </div>
          </div>

          <ModalList
            isOpen={openModal}
            setModalClose={() => setOpenModal(!openModal)}
          />
        </section>
      </S.Main>
    </S.Container>
  );
}
