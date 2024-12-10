import { Container, FormSection, InfoSection } from "./styles";
import LogoCadastroDois from "../../../assets/logonome.svg";
import Instagram from "../../../assets/instagramazul.svg";
import Mail from "../../../assets/mailazul.svg";
import Facebook from "../../../assets/facebookazul.svg";
import Twitter from "../../../assets/twitter.svg";


import * as S from "./styles";
import Button from "../../../components/button/button";
import { Input } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function CadastroPaciente() {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    CPF: "",
    nomeCompleto: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/paciente/register",
        formData
      );

      if (response.status === 201) {
        alert("Cadastro realizado com sucesso!");
        navigation("/inicio");
      }
    } catch (error) {
      console.error(error);
      alert(
        "Erro ao realizar o cadastro. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <Container>
      <FormSection>
      
        <Input
          titulo="Nome Completo"
          pass={false}
          type="text"
          subtitulo="Nome Completo"
          name="nomeCompleto"
          onChange={handleChange}
        />
        <Input
          titulo="Número do CPF"
          pass={false}
          type="text"
          subtitulo="Número do CPF"
          name="CPF"
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
          onChange={handleChange}
        />
        <div className="containercheckbox">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Eu aceito os termos de uso e as Políticas de Privacidade
          </label>
        </div>
        <Button
          onClick={handleSubmit}
          title="Cadastrar"
          size=""
          type="button"
        />
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
