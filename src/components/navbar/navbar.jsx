import React from "react";
import Logonavbar from "../../assets/logonavbar.svg";
import * as S from './style';
import { IoClose, IoMenu } from 'react-icons/io5'; 
export default function Navbar({ navbarIsVisible, setNavbarIsVisible }) {
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <S.Container>
            
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <IoClose size={45} color="#6af670"/>
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
                    <li>
                        <a href="#inicio">Início</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#servicos">Serviços</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                    <li>
                        <a href="#equipe">Equipe</a>
                    </li>
                </ul>

                <div className="auth-buttons">
                    <button>Login | Cadastro</button>
                </div>
            </nav>
        </S.Container>
    );
}
