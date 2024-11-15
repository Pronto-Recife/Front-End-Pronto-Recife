import * as S from './style';

export  default function Input({  titulo, subtitulo, type, ...re }) {
    return(
        <S.Container>
                <label>{titulo}</label>
                <S.Input type={type} placeholder={subtitulo}/>
        </S.Container>
    )
}