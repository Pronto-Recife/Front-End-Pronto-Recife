import React from "react";
import Logonavbar from "../../assets/logonavbar.svg";
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

import Logofooter from "../../assets/logofooter.svg";

import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/mail.svg";

import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Linkedin from "../../assets/Linkedin.svg"

import * as S from "./style"
import { Card } from "../../components/cards/card";

export function Home (){
  return (
    <S.Container>
    <div className="landing-page">
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

      <section className="intro">
        <div className="intro-text">
          <h1>Você no controle <br /> da sua saúde</h1>
          <p>
            Monitorar sua saúde de forma unificada <br /> nunca foi tão fácil e
            seguro.
          </p>
          <div className="intro-buttons">
            <button>
              Cadastre-se
            </button>
            <button>
              Saiba Mais
            </button>
          </div>
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
          <Card />
          
          
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
        <div className="footerleft">
          <div className="footer-logo">
            <img src={Logofooter} alt="Pronto Recife Logo" />
          </div>

          <div className="footer-info">
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit odio eligendi, dolore neque cumque, voluptatem corporis magnam tempora excepturi cum tenetur quas, ducimus suscipit earum minus mollitia atque! Iure, similique.</p>
            <p> <img src={Phone} alt="phone" /> contato@prontorecife.com</p>
            <p> <img src={Mail} alt="mail" /> (81) 1234-6789</p>
          </div>
          </div>
          
          <div className="footer-links">
            <h1>Links</h1>
            <a href="#faq">FAQ</a>
            <a href="#support">Ajuda e Suporte</a>
            <a href="#terms">Termos & Condições</a>
            <a href="#feedback">Feedback</a>
          </div>

          <div className="footer-navegacao">
            <h1> Navegação</h1>
            <a href="#inicio">Inicio</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
            <a href="#equipe">Equipe</a>
          </div>

        </div>

        <div className="copy">
        <p>Copyright ProntoRecife©2024 All rights reserved | Rede Cidadã - Start III </p>
          <div className="footer-social-icons">
            <a href="#facebook"><img src={Facebook} alt="facebook" /></a>
            <a href="#instagram"><img src={Instagram} alt="instagram" /></a>
            <a href="#linkedin"><img src={Linkedin} alt="linkedin" /></a>
          </div>
        </div>
        
      </footer>
    </div>

    </S.Container>
    
  );
};