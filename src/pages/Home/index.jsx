import React from "react";
import Logonavbar from "../../assets/Logonavbar.svg";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Fundoimg from "../../assets/fundoimg.png";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";

import Ig from "../../assets/ig.svg";
import Gh from "../../assets/gh.svg";
import Link from "../../assets/link.svg";

import Mapa from "../../assets/mapa.png";
import Myller from "../../assets/myller.png";
import Sena from "../../assets/sena.png";
import Juvenildo from "../../assets/juvenildo.png";
import Joana from "../../assets/joana.png";
import Logofooter from "../../assets/logofooter.svg";

import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";

import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Linkedin from "../../assets/linkedin.svg"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar">
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
            <button>
              <a href="#login" className="login-button">
                Login |
              </a>
              <a href="#cadastro" className="signup-button">
                {" "}
                Cadastro
              </a>
            </button>
          </div>
        </nav>
      </header>

      <section className="intro">
        <div className="intro-text">
          <h1>Você no controle da sua saúde</h1>
          <p>
            Agora, monitorar sua saúde de forma unificada nunca foi tão fácil e
            seguro.
          </p>
          <div className="intro-buttons">
            <button>
              <a href="#cadastro" className="button green">
                Cadastre-se{" "}
              </a>{" "}
            </button>
            <button>
              <a href="#saiba-mais" className="button blue">
                {" "}
                Saiba Mais
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="intro-image">
          <img src={Fundoimg} alt="Profissionais de Saúde" />
        </div>
      </section>

      <section className="services">
        <div className="service-item">
          <img src={Icon1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button>
            <a href="#saiba-mais-servico1" className="button blue">
              Saiba mais
            </a>
          </button>
        </div>
        <div className="service-item">
          <img src={Icon2} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button>
            <a href="#saiba-mais-servico1" className="button blue">
              Saiba mais
            </a>
          </button>
        </div>
        <div className="service-item">
          <img src={Icon3} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button>
            <a href="#saiba-mais-servico1" className="button blue">
              Saiba mais
            </a>
          </button>
        </div>
      </section>

      <section className="info">
        <h2>Neque porro quisquam est qui dolorem ipsum quia</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div className="info-buttons">
          <button>
            <a href="#cadastro" className="button green">
              Cadastre-se{" "}
            </a>{" "}
          </button>
          <button>
            <a href="#saiba-mais" className="button blue">
              {" "}
              Saiba Mais
            </a>{" "}
          </button>
        </div>
        <div className="info-image">
          <img src="doctor-image.png" alt="Doutor" />
        </div>
      </section>

      <section className="clinics">
        <h2>Conheça Nossas Clínicas</h2>
        <div className="clinic-list">
          <img src={Img1} alt="Clínica 1" />
          <img src={Img2} alt="Clínica 2" />
          <img src={Img3} alt="Clínica 3" />
          <img src={Img4} alt="Clínica 4" />
          <img src={Img5} alt="Clínica 5" />
        </div>
      </section>

      <section className="map">
        <h2>Encontre uma unidade de saúde próxima a você</h2>
        <input type="text" placeholder="Digite sua localização..." />
        <div className="map-container">
          <img src={Mapa} alt="Mapa de Clínicas" />
        </div>
      </section>

      <section className="team">
        <h2>Nossa Equipe</h2>

        <div className="team-members">
          <div className="team-member">
            <img src={Myller} alt="Myller Cardoso" />
            <h3>Myller Cardoso</h3>
            <p>Representante Geral e Líder Criativo</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/myllermil/">
                <img src={Ig} alt="" />
              </a>

              <a href="https://github.com/myllercardoso">
                <img src={Gh} alt="github" />
              </a>

              <a href="https://www.linkedin.com/in/myller-cardoso-245560213/">
                <img src={Link} alt="linkedin" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src={Sena} alt="" />
            <h3>Alice Sena</h3>
            <p>Representante Geral e Líder Técnica</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/alicesnpereira/">
                <img src={Ig} alt="" />
              </a>
              <a href="https://github.com/alicessena">
                <img src={Gh} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/alicessenapereira/">
                <img src={Link} alt="linkedin" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src={Juvenildo} alt="" />
            <h3>Juvenildo Farias</h3>
            <p>Piloto de Relações</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/ojuvenildofarias/">
                <img src={Ig} alt="" />
              </a>
              <a href="https://github.com/Jott47">
                <img src={Gh} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/juvenildo-cavalcanti-205468320/">
                <img src={Link} alt="linkedin" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src={Joana} alt="" />
            <h3>Joana Cosmo</h3>
            <p>Líder de Design</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/vampirleo_/">
                <img src={Ig} alt="" />
              </a>

              <a href="https://github.com/DALIZZA">
                <img src={Gh} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/cosmodalizza/">
                <img src={Link} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logofooter} alt="Pronto Recife Logo" />
          </div>

          <div className="footer-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed finibus purus. Duis mollis iaculis est.</p>
            <p> <img src={Phone} alt="phone" /> contato@prontorecife.com</p>
            <p> <img src={Mail} alt="mail" /> (81) 1234-6789</p>
          </div>

          <div className="footer-links">
            <a href="#faq">FAQ</a>
            <a href="#support">Ajuda e Suporte</a>
            <a href="#terms">Termos & Condições</a>
            <a href="#feedback">Feedback</a>
          </div>

          <div className="footer-navegacao">
            <a href="#inicio">Inicio</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
            <a href="#equipe">Equipe</a>
          </div>

        </div>

        <div className="copy">
        <p>Copyright ProntoRecife©2024 All rights reserved | Rede Cidadã - Start III </p>
        </div>
        <div className="footer-social-icons">
          <a href="#facebook"><img src={Facebook} alt="facebook" /></a>
          <a href="#instagram"><img src={Instagram} alt="instagram" /></a>
          <a href="#linkedin"><img src={Linkedin} alt="linkedin" /></a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
