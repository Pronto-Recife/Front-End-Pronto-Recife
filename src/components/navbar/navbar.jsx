import React from "react";
import Logonavbar from "../../assets/logonavbar.svg";
import * as S from "./style";
import { IoClose, IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Navbar({ navbarIsVisible, setNavbarIsVisible }) {
  const navigation = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Container>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoClose size={45} color="#6af670" />
        ) : (
          <IoMenu size={45} color="#6af670" />
        )}
      </div>

      {/* Menu que será mostrado ou escondido */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <div className="logo">
          <img src={Logonavbar} alt="Logo Pronto Recife" />
        </div>

        <ul className="nav-links">
          <button className="links">Início</button>

          <button className="links">Sobre</button>

          <button className="links">Serviços</button>

          <button className="links">Contato</button>

          <button className="links">Equipe</button>
        </ul>

        <div className="auth-buttons">
          <button onClick={() => navigation("/login")}>Login | Cadastro</button>
        </div>
      </nav>
    </S.Container>
  );
}
