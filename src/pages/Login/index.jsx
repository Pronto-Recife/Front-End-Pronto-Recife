import LogoNome from "../../assets/Login/LogoNome.svg";
import Instagram from "../../assets/Login/instagram (1).svg";
import Facebook from "../../assets/Login/facebook (1).svg";
import Twitter from "../../assets/Login/twitter.svg";
import Email from "../../assets/Login/email.svg";
import Button from "../../components/button/button";

import * as S from "./styles";
import { Input } from "../../components/Input";

export default function Login() {
  return (
    <S.Container>   
      <div className="ContainerInfo">
        <img className="logo" src={LogoNome} alt="Logo Pronto Recife" />
        <p className="letras">Ainda não tem uma conta?</p>
        <a href="/Cadastro"><Button size='login' title='Cadastre-se'/></a>

        <div className="visiteno">
        <p className="letras">Visite as nossas redes!</p>
        <div className="icons">
          <img src={Instagram} alt="Instagram" />
          <img src={Email} alt="Email" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
        </div>
        </div>

      </div>

      <div className="container-login">
        <p>Acesse a sua conta</p>

        <div className="password-container">

          <label>Tipo de documento</label>
          <select className="documento" name="documento" id="documento">
            <option className="option" value="">Selecione o tipo do documento</option>
            <option className="option" value="CPF">CPF</option>
            <option className="option" value="CRM">CRM</option>
            <option className="option" value="COREN">COREN</option>
          </select>
          
          <Input type='text' titulo='Documento' subtitulo='Digite seu documento' />
          
          <Input type='password' titulo='Senha' subtitulo='Digite sua senha' />
        </div>

        <a href="/Esquecisenha" className="forgot-password">
          Esqueceu sua senha?
        </a>

        <Button size='entrar' title='Entrar'/>
      </div>
    </S.Container>
  );
}
