import React from "react";
import * as S from './style';


export function Dbcard({ title, icon }) {
  return (
    <S.Container>
      <S.Card>
        <S.Icon>{icon}</S.Icon>
        <S.Title>{title}</S.Title>
      </S.Card>
    </S.Container>
  );
}
