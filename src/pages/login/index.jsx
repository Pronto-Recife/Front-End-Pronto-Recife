import ImagemLogo from "../../assets/logonome.svg"
import Imagem from "../../assets/Imagem.png"
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
                <h1>Acesse a plataforma</h1>
                <a href="#"><p>Faça o login</p></a>
            </div>

            <Input titulo='E-mail' subtitulo='Digite seu E-mail' type='email' />
            <Input titulo='Senha' subtitulo='Digite sua Senha' type='password'/>

            <div className="Senha">

            </div>
        </div>

        

        

        <div className="Imagem">
            <img src={Imagem} alt="" />
        </div>


        </>
    )
}