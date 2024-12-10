import LogoNome from "../../assets/Login/LogoNome.svg";
import Instagram from "../../assets/Login/instagram (1).svg";
import Facebook from "../../assets/Login/facebook (1).svg";
import Twitter from "../../assets/Login/twitter.svg";
import Email from "../../assets/Login/email.svg";
import Button from "../../components/button/button";
import Logo from "../../assets/logoprescricao.svg";

import * as S from "./styles";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api";
import { TOKEN_STORAGE } from "../../constants/TOKEN_STORAGE";
import axios from "axios";

export default function Login() {
  const [identificador, setIdentificador] = useState("");
  const [senha, setSenha] = useState("");
  const [flow, setFlow] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigate();

  async function handleLogin() {
    if (!identificador || !senha) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!flow) {
      setError("Selecione o tipo de documento.");
      return;
    }

    try {
      const response = await axios.post(
        "https://prontorecifeauth-dev.up.railway.app/auth/login",
        {
          identificador: identificador,
          senha: senha,
          flow: flow,
        }
      );
      localStorage.setItem(TOKEN_STORAGE, response.data.accessToken);
      navigation(flow === "CPF" ? "/inicio" : "/psinicio");
    } catch (error) {
      console.log(error);

      if (error.response && error.response.status === 401) {
        setError("Documento ou senha inválidos. Tente novamente.");
      } else {
        setError("Documento ou senha inválidos. Tente novamente.");
      }
    }
  }

  return (
    <S.Container>
      <div className="ContainerInfo">
        <img className="logo" src={LogoNome} alt="Logo Pronto Recife" />
        <p className="letras">Ainda não tem uma conta?</p>
        <Button
          onClick={() => navigation("/cadastro")}
          size="login"
          title="Cadastre-se"
        />

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
        <h2>Acesse a sua conta</h2>

        <img className="logoM" src={Logo} alt="Logo Pronto Recife" />
        <p className="letras">Acesse a sua conta</p>

        <div className="password-container">
          <label>Tipo de documento</label>
          <select
            onChange={(e) => setFlow(e.target.value)}
            className="documento"
            name="documento"
            id="documento"
          >
            <option className="option" value="">
              Selecione o tipo do documento
            </option>
            <option className="option" value="CPF">
              CPF
            </option>
            <option className="option" value="CRM">
              CRM
            </option>
            <option className="option" value="COREN">
              COREN
            </option>
          </select>

          <Input
            onChange={(e) => setIdentificador(e.target.value)}
            type="text"
            titulo="Documento"
            subtitulo="Digite seu documento"
          />

          <Input
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            titulo="Senha"
            subtitulo="Digite sua senha"
          />
        </div>

        <a href="/Esquecisenha" className="forgot-password">
          Esqueceu sua senha?
        </a>

        <div className="error">
          {" "}
          {error && <p className="error-message">{error}</p>}{" "}
        </div>

        <Button onClick={() => handleLogin()} size="entrar" title="Entrar" />
        <div className="contentLetras">
          <p className="letras">Ainda não tem uma conta?</p>
          <Button
            onClick={() => handleLogin()}
            size="entrar"
            title="Cadastre-se"
          />
        </div>
      </div>
    </S.Container>
  );
}
