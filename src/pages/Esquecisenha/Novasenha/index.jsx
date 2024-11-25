import React, { useState } from "react";
import Etapa_3_redefinicao from "../../../assets/Esquecisenha/Etapa_3_redefinicao.svg";
import LogoNome from "../../../assets/Login/LogoNome.svg";
import Instagram from "../../../assets/Login/instagram (1).svg";
import Facebook from "../../../assets/Login/facebook (1).svg";
import Twitter from "../../../assets/Login/twitter.svg";
import Email from "../../../assets/Login/email.svg";
import * as S from "./style";

export default function Novasenha() {
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (senha !== confirmarSenha) {
            setMensagem("As senhas não coincidem.");
            return;
        }

        try {
            // Chamada à API para redefinir a senha
            const response = await fetch('/api/redefinir-senha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ senha }),
            });

            if (response.ok) {
                setMensagem("Senha redefinida com sucesso!");
            } else {
                setMensagem("Erro ao redefinir a senha.");
            }
        } catch (error) {
            setMensagem("Erro ao conectar com o servidor.");
        }
    };

    return (
        <S.Container>
            <div className="ContainerNovaSenha"> 
                <img src={Etapa_3_redefinicao} alt="etapa3" />
                <h1>Redefinição de senha</h1>
                <h2>Crie uma nova senha segura para acessar a sua conta</h2>
                <form onSubmit={handleSubmit}>
                    <h3>Criar nova senha</h3>
                    <input
                        className="novasenha"
                        type="password"
                        placeholder="Digite nova senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <h4>Confirme sua senha</h4>
                    <input
                        className="novamente"
                        type="password"
                        placeholder="Digite novamente"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                    <button className="button" type="submit">Continuar</button>
                </form>
                {mensagem && <p>{mensagem}</p>}
            </div>

            <div className="ContainerInfo">
                <img className="logo" src={LogoNome} alt="Logo" />
                <h3>Ainda não tem uma conta?</h3>
                <button className="button">Cadastre-se</button>
                <h4>Visite as nossas redes!</h4>
                <ul className="icons">
                    <img src={Instagram} alt="" />
                    <img src={Email} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                </ul>
            </div>
            
        </S.Container>
    );
}

