import LogoCadastro from "../../assets/pacientes/logocadastro.svg";
import ImgPaciente from "../../assets/pacientes/imgpaciente.svg";
import Imgmedico from "../../assets/pacientes/imgmedico.svg";
import * as S from "./styles";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";


export function Cadastro() {
  const navigation = useNavigate();
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
          <Button onClick={() => navigation('/cadastropaciente')} title="Paciente" size="entrar" />
        </div>

        <div className="opcao" onClick={() => handleCadastro('profissional')}>
          <img src= {Imgmedico} alt="profissional da saúde" class="imgpac"/>
          <Button onClick={() => navigation('/cadastromedico')} title="Profissional" size="entrar" />
        </div>
        
       
      </div>
    </div>
    </S.Container>
    
    
  );
}

export default Cadastro;

