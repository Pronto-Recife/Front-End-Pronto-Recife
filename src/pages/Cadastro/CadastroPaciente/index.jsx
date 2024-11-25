import { Container, FormSection, InfoSection } from "./styles";
import LogoCadastroDois from "../../../assets/logonome.svg";
import Instagram from "../../../assets/instagramazul.svg";
import Mail from "../../../assets/mailazul.svg";
import Facebook from "../../../assets/facebookazul.svg";
import Twitter from "../../../assets/twitter.svg";

import * as S from "./styles";
import Button from "../../../components/button/button";
import { Input } from "../../../components/Input";



export default function CadastroPaciente() {
    return (
        <Container>
            <FormSection>
                    <Input titulo="Nome Completo" pass={false} type="text" subtitulo="Nome Completo"/>

                    <Input titulo="Número do CPF" pass={false} type="text" subtitulo="Número do CPF"/>
                    
                    <Input titulo="E-mail" pass={false} type="text" subtitulo="E-mail"/>
                    
                    <Input titulo="Senha" pass subtitulo="Senha"/>
                    
                    
                    <Input titulo="Confirmar Senha" pass subtitulo="Confirmar Senha"/>
                    
                <div className="containercheckbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">Eu aceito os termos de uso e as Políticas de Privacidade</label>
                </div>
                <a href="/inicio">
                <Button title="Cadastrar" size="" type="submit"/>
                </a>
            </FormSection>
               
               <InfoSection>
                <img src={LogoCadastroDois} alt="logonome" />

                <p className="letra">Já tem uma conta ?</p>
                <a href="/login"><Button title="Entrar" size="" type="button" secondary/></a>
                
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

