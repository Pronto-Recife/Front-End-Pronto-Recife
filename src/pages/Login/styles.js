import styled from "styled-components";
import Login from "../../assets/login.svg";
import Fundo from "../../assets/Fundo.svg"



export const Conteiner = styled.div`
   width: 100vw;
   min-height: 100vh;
   align-items: center;
   display: flex;
   justify-content: center;
   background: linear-gradient(50deg, #161B68 26%, #5F68F1 69%, #676FDE 88%);
   
  &&.ContainerCadastro {
   margin: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url({Fundo}); 
    background-size: cover;
    background-position: center;
  }

  &&.ContainerLogin{
   margin: 20px;


  }
`;
