import ImagemLogo from "../../assets/LogoLogin.png"
import Imagem from "../../assets/BackgroundLogin.png"
import { Input } from "../../components/Input"

export default function Login() {
    return (
        <>
         {/* Tags sem fechamento
        <input type="text" />
        <img src="" alt="" /> */}

        <div className="Container">
            <div className="ImagemLogo"> 
                <img src={ImagemLogo} alt="" />
            </div>

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

        

        

        <div className="Imagem">
            <img src={Imagem} alt="" />
        </div>


        </>
    )
}