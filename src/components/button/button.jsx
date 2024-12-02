import React from "react";
import * as S from './style'

export default function Button({ title, size, onClick, ...rest}) {
    return (
        <S.Container onClick={onClick} size={size}{...rest}> {title}</S.Container>
    )
}