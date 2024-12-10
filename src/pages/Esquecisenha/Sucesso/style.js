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

&& .ConteinerSucesso {
   
   height:27rem;
   width: 27rem;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 8.5rem 5.75rem 8.5rem 5.75rem;
   background-color: rgba(241, 241, 241, 0.4);
   border-radius: 1.25rem 0 0 1.25rem;
   border: 10px;
   gap: 5px;
   }

&& .ConteinerSucesso h1 {
    color: #F1F1F1;
    font-size: 1.2em;
    font-weight: 600;
  }

&& .voltarLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.2rem;
    height: 2rem;
    background-color: #6af670;
    border-radius: 30px;
    padding: 9px;
    border: none;
    color: #161b68;
    font-family: 'poppins';
    font-weight: 800;
    cursor: pointer;

    transition: background-color 0.3s ease-out, color 0.3s ease-out;

    &:hover {
      background-color: #2b318a;
      color: #fff;
    }
}

&& .ConteinerInfo {
    height: 27rem;
    width:18rem;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 9px;
    padding: 4rem 3rem 4rem 3rem;
    background-color: #f1f1f1;
    border-radius: 0 1.25rem 1.25rem 0;

    @media screen and (max-width: 700px) {
        display: none;
    }
  }

  && .ConteinerInfo .logo {
    max-width: 90%;
    padding-bottom: 15px;
  }

&& .ConteinerInfo  h3 {
   font-size: 0.8em;
   text-align: center;
   font-weight: 600;
   color: #2B318A;
  }

&& .buttoncad {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2rem;
    background-color: #6af670;
    border-radius: 30px;
    padding: 9px;
    border: none;
    color: #161b68;
    font-family: 'poppins';
    font-weight: 800;
    cursor: pointer;

    transition: background-color 0.3s ease-out, color 0.3s ease-out;

    &:hover {
      background-color: #2b318a;
      color: #fff;
    }

  }
  
&& .ConteinerInfo h4 {
    text-align: center;
    color:#2B318A;
    font-size: 0.9em;
}

&& .ConteinerInfo .icons {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

@media screen and (max-width: 700px){
  && .ConteinerSucesso  {
    border-radius: 1.25rem;
  }
}

`