import React from 'react';
import { Bell, User, Eclipse, Search } from 'lucide-react';
import * as S from './style';

export default function Superiorbar() {
    return (
        <S.BarContainer>
            <S.NavList>
                <S.NavItem>Sobre Nós</S.NavItem>
                <S.NavItem>Serviços</S.NavItem>
                <S.NavItem>Ajuda e Suporte</S.NavItem>
            </S.NavList>

            <S.SearchWrapper>
                <Search />
                <S.SearchInput type="search" placeholder="Buscar..." />
            </S.SearchWrapper>

            <S.IconWrapper>
                <Bell />
            </S.IconWrapper>
            
            <S.ToggleWrapper>
                <Eclipse />
            </S.ToggleWrapper>

            <S.AccountWrapper>
                <User />
                <S.Text>Minha Conta</S.Text>
            </S.AccountWrapper>
        </S.BarContainer>
    );
}
