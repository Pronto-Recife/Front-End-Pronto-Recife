import React, { useState } from "react";
import Logonavbar from "../../assets/logonavbar.svg";
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide";
export  function Navbar({ navbarIsVisible, setNavbarIsVisible }) {
  const navigation = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Container>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <X  />
        ) : (
          <Menu  />
        )}
      </div>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <div className="logo">
          <img src={Logonavbar} alt="Logo Pronto Recife" />
        </div>

        <ul className="nav-links">
          <a className="links"href="#">Início</a>
          <a className="links"href="#">Sobre</a>
          <a className="links"href="#">Serviços</a>
          <a className="links"href="#">Contato</a>
          <a className="links"href="#">Equipe</a>
        </ul>

        <div className="auth-buttons">
          <button onClick={() => navigation("/login")}>Login | Cadastro</button>
        </div>
      </nav>
    </S.Container>
  );
}
