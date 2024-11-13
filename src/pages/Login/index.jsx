import LogoNome from "../../assets/LogoNome.svg";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Mail from "../../assets/Mail.svg";
import Input from "../../components/Input";

import * as S from "./styles";
import Not from "../../assets/not.svg"


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
            <img src={Mail} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
          </ul>



            <div class="textos">
                <h1>Acesse a sua conta</h1>
            </div>

            <Input titulo='CPF' subtitulo='Digite seu C' type='email' />
            <Input titulo='Senha' subtitulo='Digite sua Senha' type='password'/>
            <p>Esqueceu sua senha?</p>
            <button><a href="#"><p>Entrar</p></a></button>
            
            <div className="Senha">

            </div>

        </div>


        <div className="ContainerLogin">

          <h1>Acesse a sua conta</h1>

          <Input titulo="CPF" />  
          <Input titulo="Senha" />

          <p>Esqueceu sua senha?</p>

          <button className="buttonlog"> Entrar </button>
          <img src={Not} alt="" />

        </div>
      </S.Conteiner>
    </>
  );
}
