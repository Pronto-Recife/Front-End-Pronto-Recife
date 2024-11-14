import React, { useState } from "react";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Fundoimg from "../../assets/fundoimg.png";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Medimg from "../../assets/medimg.png";
import Lupa from "../../assets/lupa.svg";
import Procura from "../../assets/procura.svg";
import Ig from "../../assets/ig.svg";
import Gh from "../../assets/gh.svg";
import Link from "../../assets/link.svg";
import Mapa from "../../assets/mapa.png";
import Logofooter from "../../assets/logofooter.svg";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/mail.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";
import * as S from "./style";
import { Card } from "../../components/cards/card";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";

export function Home() {
  const [navbarIsvisible, setNavbarIsVisible] = useState(true);

  return (
    <S.Container>
      <div className="landing-page">
        <Navbar 
        navbarIsvisible={navbarIsvisible}
        setNavbarIsVisible={setNavbarIsVisible}
        />

        <section className="intro">
          <div className="intro-text">
            <h1>
              Você no controle <br /> da sua saúde
            </h1>
            <p>
              Monitorar sua saúde de forma unificada <br /> nunca foi tão fácil
              e seguro.
            </p>
            <Button />
          </div>
        </section>

        <section className="services">
          <div className="service-item">
            <img src={Icon1} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <button>Saiba mais</button>
          </div>
          <div className="service-item">
            <img src={Icon2} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <button>Saiba mais</button>
          </div>
          <div className="service-item">
            <img src={Icon3} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <button>Saiba mais</button>
          </div>
        </section>

        <section className="info">
          <div className="info-text">
            <div className="line">‎</div>
            <h2>Neque porro quisquam est qui dolorem ipsum quia</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              sapiente tenetur modi corporis, facilis consectetur temporibus
              ducimus voluptate harum dicta quibusdam reiciendis illum quaerat
              velit perferendis rerum nostrum? Veniam, illo. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit.
            </p>

            <Button />
          </div>

          <div className="info-image">
            <img src={Medimg} alt="Doutor" />
          </div>
        </section>

        <section className="clinics">
          <div className="clinics-left">
            <h2>Conheça o nosso Projeto</h2>
            <div className="clinic-list">
              <img src={Img1} alt="Clínica 1" />
              <img src={Img2} alt="Clínica 2" />
              <img src={Img3} alt="Clínica 3" />
              <img src={Img4} alt="Clínica 4" />
            </div>
          </div>
          <iframe
            className="clinics-video"
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/9lfY_nQriJ4?si=zcpsCtFsuZFcZVZp"
            title="YouTube video player"
            frameborder="0 "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>

        <section className="map">
          <div className="map-card">
            <div className="input">
              <div className="map-text">
                <img src={Lupa} alt="" />
                <h2>Encontre uma unidade de saúde próxima a você</h2>
              </div>
              <div className="procura">
                <img src={Procura} alt="" />
                <input type="text" placeholder="Digite sua localização..." />
              </div>
            </div>

            <img src={Mapa} alt="Mapa de Clínicas" />
          </div>
        </section>

        <section className="team">
          <h2>Nossa Equipe</h2>

          <div>
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
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                  odio eligendi, dolore neque cumque, voluptatem corporis magnam
                  tempora excepturi cum tenetur quas.
                </p>
                <p>
                  <img src={Phone} alt="phone" /> contato@prontorecife.com
                </p>
                <p>
                  <img src={Mail} alt="mail" /> (81) 1234-6789
                </p>
              </div>
            </div>

            <hr className="linha" />

            <div className="footer-links">
              <div className="links">
                <h1 className="footer-title">Links</h1>
                <a href="#faq">FAQ</a>
                <a href="#support">Ajuda e Suporte</a>
                <a href="#terms">Termos & Condições</a>
                <a href="#feedback">Feedback</a>
              </div>
            </div>

            <div className="footer-links">
              <div className="links">
                <h1 className="footer-title"> Navegação</h1>
                <a href="#inicio">Inicio</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
                <a href="#equipe">Equipe</a>
              </div>
            </div>
          </div>

          <div className="copy">
            <p className="copy-text">
              Copyright ProntoRecife©2024 All rights reserved | Rede Cidadã -
              Start III{" "}
            </p>

            <div className="footer-social-icons">
              <a href="#facebook">
                <img src={Facebook} alt="facebook" />
              </a>
              <a href="#instagram">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="#linkedin">
                <img src={Linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </S.Container>
  );
}
