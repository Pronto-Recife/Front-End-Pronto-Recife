import { Container, FormSection, InfoSection } from "./styles";
import LogoCadastroDois from "../../../assets/logonome.svg";
import Instagram from "../../../assets/instagramazul.svg";
import Mail from "../../../assets/mailazul.svg";
import Facebook from "../../../assets/facebookazul.svg";
import Twitter from "../../../assets/twitter.svg";
import Logo from "../../../assets/logoprescricao.svg";

import * as S from "./styles";
import Button from "../../../components/button/button";
import { Input } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api } from "../../../service/api";

export default function CadastroMedico() {
  const navigation = useNavigate();
  
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    CRM: "",
    email: "",
    senha: "",
    confirmSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post(
        "/medico/register", 
        formData
      );
      console.log(response)
      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        navigation("/psinicio");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar o cadastro. Verifique os dados e tente novamente.");
    }
  };

  return (
    <Container>
      <FormSection>
      <img className="logoM" src={Logo} alt="Logo Pronto Recife" />
        <Input
          titulo="Nome Completo"
          pass={false}
          type="text"
          subtitulo="Nome Completo"
          name="nomeCompleto"
          onChange={handleChange}
        />
        <Input
          titulo="CRM"
          pass={false}
          type="text"
          subtitulo="CRM"
          name="CRM"
          onChange={handleChange}
        />
        <Input
          titulo="E-mail"
          pass={false}
          type="email"
          subtitulo="E-mail"
          name="email"
          onChange={handleChange}
        />
        <Input
          titulo="Senha"
          pass
          subtitulo="Senha"
          name="senha"
          onChange={handleChange}
        />
        <Input
          titulo="Confirmar Senha"
          pass
          subtitulo="Confirmar Senha"
          name="confirmSenha"
          onChange={handleChange} 
        />
        <div className="containercheckbox">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Eu aceito os termos de uso e as Políticas de Privacidade
          </label>
        </div>
        <Button onClick={() => handleSubmit()} title="Cadastrar" size="" type="button" />
        <div className="contentLetras">
        <p className="letras">Ainda não tem uma conta?</p>
        <Button onClick={() => handleLogin()} size="entrar" title="Cadastre-se" />
        </div>
      </FormSection>

      <InfoSection>
        <img src={LogoCadastroDois} alt="logonome" />
        <p className="letra">Já tem uma conta ?</p>
        <Button
          onClick={() => navigation("/login")}
          title="Entrar"
          size=""
          type="button"
          secondary
        />
        <p className="letra">Visite as nossas redes!</p>
        <ul className="icons">
          <img src={Instagram} alt="" />
          <img src={Mail} alt="" />
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
        </ul>
      </InfoSection>
    </Container>
  );
}
