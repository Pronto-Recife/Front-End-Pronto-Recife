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
import Button from "../../components/button/button";
import { Navbar } from "../../components/navbar/navbar";

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

            <div className="intro-buttons">
            <Button size='home' title='Cadastre-se'/>
            <Button size='home' title='Saiba Mais'/>
            </div>

          </div>
        </section>

        <section className="services">
          <div className="service-item">
            <img src={Icon1} alt="" />
            <p>
            Verifique e registre os seus prontuários médicos em um único lugar.
            </p>
            <Button size='home' title='Saiba Mais'/>
          </div>
          <div className="service-item">
            <img src={Icon2} alt="" />
            <p>
            Marque as suas consultas com agilidade e eficiência sem precisar de casa.
            </p>
            <Button size='home' title='Saiba Mais'/>
          </div>
          <div className="service-item">
            <img src={Icon3} alt="" />
            <p>
            Encontre o seu atendimento mais próximo na Região Metropolitana de Recife
            </p>
            <Button size='home' title='Saiba Mais'/>
          </div>
        </section>

        <section className="info">
          <div className="info-text">
            <div className="line">‎</div>
            <h2>Seu atendimento médico agora de forma simplificada</h2>
            <p>
            Centralize todos os seus registros médicos e agende consultas no SUS Recife em um único lugar. Com segurança e eficiência, acompanhe seu histórico de saúde e simplifique seu atendimento médico. Nossa plataforma facilita o acesso a informações importantes e permite que você gerencie suas consultas de forma prática e rápida. Tudo isso com a tranquilidade de saber que seus dados estão protegidos.

            </p>

            <div className="info-buttons"> 
            <Button size='home' title='Cadastre-se'/>
            <Button size='home' title='Saiba Mais'/>
            </div>
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
            width="80%"
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

           <div className="maps">
            <iframe 
                src="https://www.google.com/maps?q=hospitais+perto+de+Av.+Alfredo+Lisboa,+268,+Recife,+PE,+50030-150&output=embed"
                frameborder="0"
                allowfullscreen="" 
                loading="lazy">
            </iframe>
        </div>
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
                  Em caso de qualquer dúvida ou sujestões, por favor entre me contato conosco
                </p>
                <p>
                  <img src={Phone} alt="phone" /> prontorecife@gmail.com
                </p>
                <p>
                  <img src={Mail} alt="mail" /> (81) 01234-6789
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
