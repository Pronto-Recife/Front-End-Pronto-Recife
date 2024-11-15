import styled from "styled-components";

export const Conteiner = styled.div`
  margin: 0;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
  background-size: cover;
  display: flex;  
  font-family: 'poppins';
  
  && .ContainerCadastro {
    height: 27rem;
    width:18rem;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap:8px;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 20px 0 0 20px;
  }
  && .ContainerCadastro .logo {
    width: 80%;
    margin-bottom: 20px;
  }

  && .ContainerCadastro  h5 {
   font-size: 1.8 rem;
   color: #2B318A;
  }

  && .buttoncad {
    width: 60%;
    height: 2rem;
    background-color: #6AF670;
    border-radius: 30px;
    padding: 5px ;
    border: 1px solid #2B318A ;

  }
  && .buttoncad:hover{
    background-color: #2b318a;

  }

  && .ContainerCadastro h4 {
    margin-top: 15px;
    color: #2B318A;
  }

  && .ContainerCadastro .icons {
    display: flex;
    gap:9px;
    margin-top: 15px;
    
  }
  && .ContainerLogin {
   
    height:27rem;
    width: 27rem;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(241, 241, 241, 0.4);
    border-radius: 0 20px 20px 0;
    border: 10px;

  }


  && .ContainerLogin h1 {
    color: #2B318A;
    margin: 0;
  
   }
  && .ContainerLogin h4{

    margin-top: 10px;
    width: 90%;
    color:#2B318A;
  
  }
  
  && .inputCpf {
    height: 39px;
    margin: 15px 0;
    padding: 10px;
    width: 90%; 
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 8px  ;
    align-items:center;

  }

  && .inputSenha{

    height: 39px;
    margin: 15px 0;
    padding: 10px;
    width: 90%; 
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 8px  ;
    align-items:center;


   }

  && .containerInputbutton {
    display: flex;
    align-items: center;
    border-color: #2B318A ;
    border-radius: 10px ;
 
  
   }
  && .containerInputbutton img {
    background-color: #f1f1f1;
    
   }

  && .buttonlog {
    width: 40%;
    height: 2rem;
    background-color: #6af670;
    border-radius: 30px;
    padding: 9px ;
    margin: 9px;
    border: 1px solid #2B318A ;

    }

  && .buttonlog:hover {
      background-color: #2b318a;
    }

&& .esqueciSenha {
    width: 50%;
    color:#2B318A;
    align-self: flex-end;     
    cursor: pointer;
    margin-top: -10px;
    
    }

`;

