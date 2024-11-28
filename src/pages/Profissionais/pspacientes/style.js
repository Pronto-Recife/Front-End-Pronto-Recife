import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;   
    flex-direction: column;
    border-radius: 10px;
    row-gap: 20px;
    
    .titlecontent {
        display: flex;
        font-size: 26px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        color: #161B68;
    }

    .titleresultados {
        color: #161B68;
        font-size: 25px;
        font-weight: 500;
        
    }

    .pesquisa {
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        background-color: #DEE0FF;
        border-radius: 40px;
        -webkit-box-shadow: 10px 11px 11px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 11px 11px -10px rgba(0,0,0,0.75);
        box-shadow: 10px 11px 11px -10px rgba(0,0,0,0.75);
    }

    .box {
        width: 100%;
        padding: 20px;
        background-color: transparent;
        border: none;
        outline: none;
        
    }

    .searchbutton {
        background-color: transparent;
        border: none;
        padding: 15px;

    }
       
`
export const Cardlist = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;   
`
export const Card = styled.div`
    display: flex;  
    height: 15rem;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px; 
    
   
   .img{
    width: 10%;
    height: 200px;
    
   }

   .info{   
    color: #161B68;
    font-size: 14px;
   }

   .informacoes{
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 100px 80px;
    width: 60%;
    background: #DEE0FF;
    border: 4px solid #161B68;
    border-radius: 10px;
   }

   .infos{
    display: flex;
    flex-direction: column;   
    color: #161B68;
   }

   .botao{
    display: flex;
    flex-direction: column;  
   }
`
export const Content = styled.div`
   display: flex;
   width: 100%;
`
export const PrescriptionCard = styled.div`
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  h3 {
    color: #161B68;
    display: inline-block;
    margin-right: 1rem;
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`
export const VejaMaisButton = styled.button`
  display: flex;
  justify-content: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #030F41; 
  font-weight: 600;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
  align-self: flex-end;

  &:hover {
    background-color: none; 
    transform: scale(1.1); 
  }

  svg {
    margin-right: 0.5rem;
  }
`

