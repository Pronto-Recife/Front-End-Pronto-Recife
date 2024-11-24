import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    flex-direction: column;
    

    && .mensagem {
    
    width: 35rem; 
    height: 25rem ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 30px 10px;
    border-radius: 5px;
    border: 1 solid black ;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

 }

  && .mensagem img {
    width: 60%;

  }

    && .mensagem h1 {
    font-size: 1.5rem;
    color: #2B318A ;
    margin: 10px 0 ;
      
    }
        && .mensagemContainer {
            display: flex;
            flex-direction: column;
            align-items: start;
            row-gap: 10px;




        }
  








`