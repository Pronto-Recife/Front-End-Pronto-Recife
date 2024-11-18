import React from "react";
import * as S from './style'

export default function Button({ title, size }) {
    return (
        <S.Container size={size}> {title}</S.Container>
    )
}