import React, { useState } from "react";
import Etapa_2_senha from "../../../assets/Esquecisenha/Etapa_2_senha.svg";
import LogoNome from "../../../assets/Login/LogoNome.svg";
import Instagram from "../../../assets/Login/instagram (1).svg";
import Facebook from "../../../assets/Login/facebook (1).svg";
import Twitter from "../../../assets/Login/twitter.svg";
import Email from "../../../assets/Login/email.svg";

import * as S from "./styles";

export default function Inserircodigo() {
    const [codigo, setCodigo] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleVerificarCodigo = async (e) => {
        e.preventDefault();

        try {
            
            const response = await fetch('/api/verificar-codigo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ codigo }),
            });

            if (response.ok) {
                setMensagem("Código verificado com sucesso!");

            } else {
                setMensagem("Código de verificação inválido.");
            }
        } catch (error) {
            setMensagem("Erro ao conectar com o servidor.");
        }
    };

    return (
        <S.Conteiner>
            <div className="ConteinerInserirCodigo"> 
                <img src={Etapa_2_senha} alt="etapa2" />
                <h1>Código de verificação</h1>
                <h2>Digite o código enviado para o seu e-mail</h2>
                <form onSubmit={handleVerificarCodigo}>
                    <input
                        className="codigo"
                        type="text"
                        placeholder="Digite o código"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                    <button className="buttonVerificar" type="submit">Verificar código</button>
                </form>
                {mensagem && <p>{mensagem}</p>}
            </div>

            <div className="ConteinerInfo">
                <img className="logo" src={LogoNome} alt="Logo" />
                <h3>Ainda não tem uma conta?</h3>
                <button className="buttoncad">Cadastre-se</button>
                <h4>Visite as nossas redes!</h4>
                <ul className="icons">
                    <img src={Instagram} alt="" />
                    <img src={Email} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                </ul>
            </div>
        </S.Conteiner>
    );
}
