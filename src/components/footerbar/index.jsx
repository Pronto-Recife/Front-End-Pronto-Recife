import React from "react";
import * as S from './style';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footerbar() {
    return (
        <S.Container>
            <p>Copyright ProntoRecife©2024 All rights reserved | Rede Cidadã - Start III</p>
            
            <S.Social>
                <Facebook size={20} style={{ marginRight: "10px" }} /> 
                <Instagram size={20} style={{ marginRight: "10px" }} /> 
                <Linkedin size={20} style={{ marginRight: "10px" }} /> 
            </S.Social>
        </S.Container>
    );
}
