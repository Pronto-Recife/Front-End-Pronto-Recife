import LogoCadastro from "../../assets/pacientes/logocadastro.svg";
import ImgPaciente from "../../assets/pacientes/imgpaciente.svg";
import Imgmedico from "../../assets/pacientes/imgmedico.svg";
import * as S from "./styles";
import Button from "../../components/button/button";


export function Cadastro() {
  return  (
   
    <S.Container>

    <div className="container">
      
      <div className="imgLogo">
      <img src= {LogoCadastro} alt="logoCadastro" />
      </div>
      <h2 className="titleB">Escolha o seu tipo de conta</h2>

      <div className="butn-opcoes">
        
      <div className="opcao" onClick={() => handleCadastro('paciente')}>
          <img src= {ImgPaciente} alt="paciente" class="imgpac"/>
          <a href="/cadastropaciente"><Button title="Paciente" size="entrar" /></a>
        </div>

        <div className="opcao" onClick={() => handleCadastro('profissional')}>
          <img src= {Imgmedico} alt="profissional da saúde" class="imgpac"/>
          <a href="/cadastromedico"><Button title="Profissional" size="entrar" /></a>
        </div>
        
       
      </div>
    </div>
    </S.Container>
    
    
  );
}

export default Cadastro;

