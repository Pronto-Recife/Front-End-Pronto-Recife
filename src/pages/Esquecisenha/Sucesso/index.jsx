import Etapa_4_sucesso from "../../../assets/Esquecisenha/Etapa_4_sucesso.svg";
import LogoNome from "../../../assets/Login/logonome.svg";
import Instagram from "../../../assets/Login/instagram (1).svg";
import Facebook from "../../../assets/Login/facebook (1).svg";
import Twitter from "../../../assets/Login/twitter.svg";
import Email from "../../../assets/Login/email.svg";

import * as S from "./style";

export default function Sucesso() {
    
    return (

        <S.Conteiner>

            <div className="ConteinerSucesso"> 
                <img src= {Etapa_4_sucesso} alt="etapa4" />
                <h1> Sua senha foi alterada com sucesso! </h1>
                <button className="voltarLogin"> Ir para o Login </button>
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