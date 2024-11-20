import * as S from './style';

export function Input({ titulo, subtitulo, type, pass }) {
    return(
        <>
        {pass === true ? (
            <S.Container>
                <label>{titulo}</label>
                <S.Input type='password' placeholder={subtitulo}/>
        </S.Container>
        ) : (
            <S.Container>
                <label>{titulo}</label>
                <S.Input type={type} placeholder={subtitulo}/>
        </S.Container>
        )}
        </>
    )
}