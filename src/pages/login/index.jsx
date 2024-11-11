import LogoNome from "../../assets/LogoNome.svg";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Mail from "../../assets/Mail.svg";
import Input from "../../components/Input";

import * as S from "./styles.js";

export default function Login() {
  return (
    <>
      <S.Conteiner>
        <div className="ContainerCadastro">
            <img src={LogoNome} alt="Logo" />

            <h4> Ainda não tem uma conta?</h4>
            <input type="text" />
            <button> Cadastre-se </button>

            <h3>Visite as nossas redes!</h3>

          <ul>
                <img src={Instagram} alt="" />
                <img src={Mail} alt="" />
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
          </ul>
        </div>

        <div className="ContainerLogin">
            <h1>Acesse a sua conta</h1>

            <Input titulo="CPF" />
            <Input titulo="Senha" />

            <p>Esqueceu sua senha?</p>

            <input type="text" />
            <button> Entrar </button>
        </div>
        
      </S.Conteiner>
    </>
  );
}
