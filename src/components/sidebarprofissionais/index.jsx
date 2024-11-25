import React from "react";
import { useLocation } from "react-router-dom"; 
import * as S from './style';
import Sidebarlogo from "../../assets/profissionais/sidebarlogo.svg"

import { Home, BookUser, Microscope, FolderHeart, BookOpen , Settings, Shield, LifeBuoy, LogOut } from "lucide-react"; 

export default function SidebarProfissionais() {
    const location = useLocation();

    return (
        <S.Container>
            <S.Logo>
                <img src={Sidebarlogo} alt="Pronto Recife" />
            </S.Logo>
            

            <S.Menu>
                <h5>Menu</h5>
                <S.MenuItem active={location.pathname === "/psinicio"}>
                    <a href="/psinicio">
                        <Home size={20} style={{ marginRight: "10px" }} /> 
                        Início
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/pspacientes"}>
                    <a href="/pspacientes">
                        <BookUser size={20} style={{ marginRight: "10px" }} /> 
                        Pacientes
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/psexames"}>
                    <a href="/psexames">
                        <Microscope size={20} style={{ marginRight: "10px" }} /> 
                        Exames
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/psprescricoes"}>
                    <a href="/psprescricoes">
                        <BookOpen  size={20} style={{ marginRight: "10px" }} /> 
                        Prescrições
                    </a>
                </S.MenuItem>

                <S.MenuItem active={location.pathname === "/psrelatorios"}>
                    <a href="/psrelatorios">
                        <FolderHeart  size={20} style={{ marginRight: "10px" }} /> 
                        Relatorios
                    </a>
                </S.MenuItem>
            </S.Menu>

            <S.Divider />

            <S.General>
                <h5>Geral</h5>
                <S.MenuItem active={location.pathname === "/psdadoscadastrais"}>
                    <a href="/psdadoscadastrais">
                        <Settings size={20} style={{ marginRight: "10px" }} /> 
                        Dados Cadastrais
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/psseguranca"}>
                    <a href="/psseguranca">
                        <Shield size={20} style={{ marginRight: "10px" }} /> 
                        Segurança
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/psajuda"}>
                    <a href="/psajuda">
                        <LifeBuoy size={20} style={{ marginRight: "10px" }} /> 
                        Ajuda
                    </a>
                </S.MenuItem>
                <S.MenuItem active={location.pathname === "/pssair"}>
                    <a href="/pssair">
                        <LogOut size={20} style={{ marginRight: "10px" }} /> 
                        Sair
                    </a>
                </S.MenuItem>
            </S.General>
        </S.Container>
    );
}
