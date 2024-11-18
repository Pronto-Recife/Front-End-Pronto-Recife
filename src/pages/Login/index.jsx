import LogoNome from "../../assets/Login/LogoNome.svg";
import Instagram from "../../assets/Login/instagram (1).svg";
import Facebook from "../../assets/Login/facebook (1).svg";
import Twitter from "../../assets/Login/twitter.svg";
import Email from "../../assets/Login/email.svg";

import * as S from "./styles";

export default function Login() {
  return (
    <S.Container>
      <div className="container-cadastro">
        <img className="logo" src={LogoNome} alt="Logo Pronto Recife" />
        <h5>Ainda não tem uma conta?</h5>
        <button className="button-cadastro">Cadastre-se</button>

        <div className="visiteno">
        <h5>Visite as nossas redes!</h5>
        <div className="icons">
          <img src={Instagram} alt="Instagram" />
          <img src={Email} alt="Email" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="Twitter" />
        </div>
        </div>

      </div>

      <div className="container-login">
        <h1>Acesse a sua conta</h1>

        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          className="input"
          type="text"
          placeholder="Digite seu CPF"
        />

        <label htmlFor="senha">Senha</label>
        <div className="password-container">
          <input
            id="senha"
            className="input senha"
            type="password"
            placeholder="Digite sua senha"
          />
          <span className="eye-icon"></span>
        </div>

        <a href="/" className="forgot-password">
          Esqueceu sua senha?
        </a>

        <button className="button-login">Entrar</button>
      </div>
    </S.Container>
  );
}
