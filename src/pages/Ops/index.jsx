import Logo from'../../assets/Default/Logo.svg';
import Button from '../../components/button/button';



import * as S from './style';

export default function OPS(){
    return (
        <>
         <S.Container>
         
            <div className='mensagem'>
                <div className='mensagemContainer'>
                <img src={Logo} alt="" />
                 <h1>Oops! Página não encontrada</h1>

                <Button  size='home' title='Tente Novamente' />
                </div>
                
            </div>
         

         </S.Container>
        
        
        </>



    );
}