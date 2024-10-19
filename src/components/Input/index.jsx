export function Input({  titulo, subtitulo, type, ...re }) {
    return(
        <div className="E-mail">
                <label>{titulo}</label>
                <input type={type} placeholder={subtitulo}/>
        </div>
    )
}