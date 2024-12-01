import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Poppins";


  && .modal {
    width: 40em;
    height: 25rem;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;

  }
  && .img {
    width: 40%;
    height: 5rem;
  }
  && .text {
    color: #2b318a;
    font-size: 1.2rem;
    
  }

  && .components {
    display: flex;
    justify-content:center ;
    align-items: center;
    height: 5rem;
    width: 8rem;
    gap: 20px;
  }

  && .buttons{

  background-color:   #2b318a;
  color: #fff;
  padding: 10px 40px;
  border-radius: 20px;  
  border: 2px solid #2b318a;


  } 
   
  && .buttons:hover {
 background-color: #6af670;
 color:#2b318a ;


  }

&& .button{
  
  border: 2px solid #2b318a;
  color: #2b318a;
  border-radius: 20px;
  padding: 10px 40px;

}


`
