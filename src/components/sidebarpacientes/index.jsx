import React from "react";
import { useLocation } from "react-router-dom"; 
import * as S from './style';
import Sidebarlogo from "../../assets/pacientes/sidebarlogo.svg"


import { Home, Calendar, Microscope, User, Settings, Shield, LifeBuoy, LogOut } from "lucide-react"; 

export default function Sidebarpacientes() {
    const location = useLocation();

    return (
        <S.Container>
            <S.Logo>
                <img src={Sidebarlogo} alt="Pronto Recife" />
            </S.Logo>

            <S.Menu>
                <h5>Menu</h5>
                <S.MenuItem active={location.pathname === "/inicio"}>
                    <a href="/inicio">
                        <Home size={20} style={{ marginRight: "10px" }} /> 
                        Início
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/consultas"}>
                    <a href="/consultas">
                        <Calendar size={20} style={{ marginRight: "10px" }} /> 
                        Consultas
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/exames"}>
                    <a href="/exames">
                        <Microscope size={20} style={{ marginRight: "10px" }} /> 
                        Exames
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/perfil"}>
                    <a href="/perfil">
                        <User size={20} style={{ marginRight: "10px" }} /> 
                        Perfil
                    </a>
                </S.MenuItem>
            </S.Menu>

            <S.Divider />

            <S.General>
                <h5>Geral</h5>
                <S.MenuItem active={location.pathname === "/dadoscadastrais"}>
                    <a href="/dadoscadastrais">
                        <Settings size={20} style={{ marginRight: "10px" }} /> 
                        Dados Cadastrais
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/seguranca"}>
                    <a href="/seguranca">
                        <Shield size={20} style={{ marginRight: "10px" }} /> 
                        Segurança
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/ajuda"}>
                    <a href="/ajuda">
                        <LifeBuoy size={20} style={{ marginRight: "10px" }} /> 
                        Ajuda
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/sair"}>
                    <a href="/sair">
                        <LogOut size={20} style={{ marginRight: "10px" }} /> 
                        Sair
                    </a>
                </S.MenuItem>
            </S.General>
        </S.Container>
    );
}
