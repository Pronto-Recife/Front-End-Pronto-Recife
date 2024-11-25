import React from "react";
import * as S from './style'

export default function Button({ title, size, ...rest}) {
    return (
        <S.Container size={size}{...rest}> {title}</S.Container>
    )
}