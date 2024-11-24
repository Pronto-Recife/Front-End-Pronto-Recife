import { Container, FormSection, InfoSection } from "./styles";
import LogoCadastroDois from "../../../assets/logonome.svg";
import Instagram from "../../../assets/instagramazul.svg";
import Mail from "../../../assets/mailazul.svg";
import Facebook from "../../../assets/facebookazul.svg";
import Twitter from "../../../assets/twitter.svg";

import * as S from "./styles";
import Button from "../../../components/button/button";
import { Input } from "../../../components/Input";



export default function CadastroMedico() {
    return (
        <Container>
            <FormSection>
                    <Input titulo="Nome Completo" pass={false} type="text" subtitulo="Nome Completo"/>

                    <Input titulo="CRM" pass={false} type="text" subtitulo="CRM"/>
                    
                    <Input titulo="E-mail" pass={false} type="text" subtitulo="E-mail"/>
                    
                    <Input titulo="Senha" pass subtitulo="Senha"/>
                    
                    
                    <Input titulo="Confirmar Senha" pass subtitulo="Confirmar Senha"/>
                    
                <div className="containercheckbox">
                <input type="checkbox" id="terms" />
                <p>Eu aceito os termos de uso e as Políticas de Privacidade</p>
                </div>
                <Button title="Cadastrar" size="" type="submit"/>
            </FormSection>
               
               <InfoSection>
                <img src={LogoCadastroDois} alt="logonome" />

                <p className="letra">Já tem uma conta ?</p>
                <Button title="Entrar" size="" type="button" secondary/>
                
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

