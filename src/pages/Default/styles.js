import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    flex-direction: column;
  
    
    

&& .mensagem{
 height: 25rem ;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: white;
 padding: 30px 100px;
 border-radius: 5px;
 border: 1 solid black ;
 box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

}

&& .mensagem h1{
    font-size: 2.5rem;
    color: #2B318A ;
    margin: 10px 0 ;

}
&& .mensagem p {
    font-size: 1rem;
    color: #2B318A ;
    margin-bottom: 20px;

}

@media screen and (max-width: 600px) {
        display: flex;

        && .mensagem {
            padding: 30px 50px;
        }
    }
`