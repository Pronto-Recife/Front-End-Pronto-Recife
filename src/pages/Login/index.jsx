import LogoNome from "../../assets/Login/LogoNome.svg";
import Instagram from "../../assets/Login/instagram (1).svg";
import Facebook from "../../assets/Login/facebook (1).svg";
import Twitter from "../../assets/Login/twitter.svg";
import Email from "../../assets/Login/email.svg";
import Input from "../../components/Input";

import * as S from "./styles";


export default function Login() {
  return (
    <>
      <S.Conteiner>

        <div className="ContainerCadastro">
          <img className="logo" src={LogoNome} alt="Logo" />

          <h5> Ainda não tem uma conta?</h5>

          <button className="buttoncad"> Cadastre-se </button>

          <h4>Visite as nossas redes!</h4>

          <ul className="icons">
            <img src={Instagram} alt="" />
            <img src={Email} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
          </ul>
        </div>

        <div className="ContainerLogin">

          <h1>Acesse a sua conta</h1>

           <h4>CPF</h4>
           <input className="inputCpf" type="text" />
           <h4>Senha</h4>
           <input className ="inputSenha" type="password" placeholder="Digite sua senha"/>
       
        


          <div className="esqueciSenha">
          <p>Esqueceu sua senha?</p>
          </div>
      

          <button className="buttonlog">Entrar</button>
          
     
        </div>
       
      </S.Conteiner>
    </>
  );
}
