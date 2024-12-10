import Logo from '../../assets/Default/Logo.svg';
import Button from '../../components/button/button';

import * as S from "./styles";

export default function Default(){
     return (
        <>
        <S.Container>

         <div className='mensagem'>
            <div>
            <img src={Logo} alt="" />
            <h1> 404:( </h1>
            <p>Algo deu errado!Tente novamente <br />mais tarde!</p>

            <Button  size='home' title='Tente Novamente' />
            </div>
         </div>

        </S.Container>
        
        
        </>

     )

}