import Etapa_1_email from "../../assets/Esquecisenha/Etapa_1_email.svg"
import LogoNome from "../../assets/Login/LogoNome.svg";
import Instagram from "../../assets/Login/instagram (1).svg";
import Facebook from "../../assets/Login/facebook (1).svg";
import Twitter from "../../assets/Login/twitter.svg";
import Email from "../../assets/Login/email.svg";

import * as S from "./styles";

export default function Esquecisenha() {
    
    return (

        <S.Conteiner>

            <div>
                <div className="ConteinerEsquecisenha"> 
                <img src= {Etapa_1_email} alt="etapa1" />
                <h1> Esqueci a senha </h1>
                <h2> Digite o e-mail cadastrado para receber o código de verificação </h2>
                <input className="seuemail" type="e-mail" placeholder="Digite seu e-mail"/>
                <button className="buttonReceber"> Receber código </button>
            </div>

            </div>
            <div className="ConteinerInfo" >
            <img className="logo" src={LogoNome} alt="Logo" />
            <h3> Ainda não tem uma conta?</h3>

            <button className="buttoncad"> Cadastre-se </button>

            <h4>Visite as nossas redes!</h4>

            <ul className="icons">
                <img src={Instagram} alt="" />
                <img src={Email} alt="" />
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
            </ul>

            </div>

        </S.Conteiner>
    ); 
    }



