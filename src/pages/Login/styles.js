import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  display: flex;  
  justify-content: center;
  background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
  background-size: cover;
  

  && .ContainerCadastro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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

  && .ContainerCadastro .buttoncad {
    width: 50%;
    background-color: #6af670;
    border-radius: 30px;
  }

  && .ContainerCadastro h4 {
    color: #2B318A;


  }

  && .ContainerCadastro .icons {
    display: flex;
    gap:15px;
    margin-top: 15px;
    
    
  }



//



  && .ContainerLogin {
    
    height:23rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: rgba(241, 241, 241, 0.4);
    padding: 20px;
    border-radius: 0 20px 20px 0;
  }

  && .ContainerLogin h1 {
    color: #2B318A;


  }
  && .ContainerLogin input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #cccccc;
    border-radius: 5px;

  }


  && .ContainerLogin .buttonlog {
    width: 50%;
    background-color: #6af670;
    border-radius: 30px;
  }
`;
