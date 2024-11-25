import styled from "styled-components";


export const Container= styled.div`
    background-color: aquamarine;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(241, 241, 241, 0.8);
    padding: 50px 80px;
    row-gap: 20px;
    text-align: center;
    border-radius: 20px;
    overflow: hidden;

}

.imgpac{
    width: 100%;
    height: 70%;
   
}


.titleB{
    color: #161B68;
    font-size: 32px;
   
}

.opcaopaciente-button {
    gap: 20px;

}

.butn-opcoes {
    display: flex;
    gap: 70px;
}



.opcao {
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    row-gap: 10px;
}

    
@media screen and (max-width: 730px){  
    .container {
    width: 80%;
    
 
}
.butn-opcoes {
    flex-direction: column;
}
}
`