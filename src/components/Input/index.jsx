import * as S from './style';

export function Input({ titulo, subtitulo, type, pass, ...rest }) {
    return(
        <>
        {pass === true ? (
            <S.Container>
                <label>{titulo}</label>
                <S.Input {...rest} type='password' placeholder={subtitulo}/>
        </S.Container>
        ) : (
            <S.Container>
                <label>{titulo}</label>
                <S.Input {...rest} type={type} placeholder={subtitulo}/>
        </S.Container>
        )}
        </>
    )
}