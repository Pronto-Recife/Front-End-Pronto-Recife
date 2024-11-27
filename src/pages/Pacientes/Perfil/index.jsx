import Footerbar from "../../../components/footerbar";
import Sidebarpacientes from "../../../components/sidebarpacientes";
import Superiorbar from "../../../components/superiorbar";
import Foto from "../../../assets/Paciente/foto.svg";

import * as S from "./styles";


export default function perfil() {

    return (
        <> 
           <Superiorbar />
          
           
          <S.Container>
            
          <Sidebarpacientes />
          <div>
            <div className="paciente">
                   
                <img src={Foto} alt="" />

                <div className="Inf">

                        <h2>Maria Lucia da silva</h2>

                        <p> <strong>Idade :</strong>  68 anos </p>
                        <p><strong>Telefone:</strong> (00) 0000-0000</p>
                        <p> <strong>Endereço:</strong> R. Afonso Barbosa ,48 </p>
                        <p> <strong>Primeira consulta:</strong>  2022-01-01</p>
                        <p> <strong>Convênio :</strong> Público </p>
                        <p> <strong>Genero:</strong> Feminino </p>
                        <p> <strong>Email:</strong> marialucia@gmail.com</p>
                        <p><strong>Atendimento :</strong> 1 </p>
                        <p> <strong>Faltas : </strong> 0 </p>


                        <button>Visualizar Cadastro </button>
                        <button> Inserir Email Automático </button>
                </div>

           </div>


        <div className="historico">

                <h1>Historico Médico</h1>


                <h3>Doenças Pré-existentes</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quibusdam repellendus quasi, quae unde distinctio dolorum 
                    quis dicta amet error qui recusandae quos dolorem eius dolor 
                    sint consectetur! Mollitia, aut est.</p>
               
                    
                <h3>Condições Crônicas</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Vitae odio debitis cum at sit asperiores, 
                    non minima ad tempora veniam qui molestias.
                    Mollitia at aperiam, cumque tempore officia nostrum ste?</p>

                    
                <h3>Historico de medicação</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, obcaecati. Est nulla excepturi consequuntur praesentium optio accusamus 
                laboriosam? Excepturi dolor enim nobis id recusandae soluta ut rem aspernatur dolore minima!</p>
                
                

          </div>

          
          </div>
       
      
     




         </S.Container>
        

        <footer>
         <Footerbar />
        </footer>
        </>
    )
}