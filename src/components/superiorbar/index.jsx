import React, { useState } from 'react';
import { Bell, User, Search } from 'lucide-react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export default function Superiorbar({ onSearch }) {
    const [query, setQuery] = useState('');

    const navigation = useNavigate();


    const handleSearch = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); 
    };

    return (
        <S.BarContainer>
            <S.NavList>
                <S.NavItem onClick={() => navigation('/cadastro')} >Sobre Nós</S.NavItem>
                <S.NavItem onClick={() => navigation('/ajudaesup')} >Ajuda e Suporte</S.NavItem>
                <S.NavItem onClick={() => navigation('/servicos')} >SAC</S.NavItem>
            </S.NavList>

            <S.SearchWrapper>
                <Search />
                <S.SearchInput 
                    type="search" 
                    placeholder="Buscar..." 
                    value={query}
                    onChange={handleSearch} 
                />
            </S.SearchWrapper>

            <S.IconWrapper>
                <Bell />
            </S.IconWrapper>

            <S.AccountWrapper>
                <User />
                <S.Text>Minha Conta</S.Text>
            </S.AccountWrapper>
        </S.BarContainer>
    );
}
