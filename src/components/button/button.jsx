import React from "react";
import * as S from './style'

export default function Button() {
    return (
        <S.Container>
            <div className="btn">
              <button>Cadastre-se</button>
              <button>Saiba Mais</button>
            </div>
        </S.Container>
    )
}