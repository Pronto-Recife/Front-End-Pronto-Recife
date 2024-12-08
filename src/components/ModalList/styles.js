import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0,0,0,0.5);

  
  && .modal {
    
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: white;
   border-radius: 20px;
   width: 30%;
   height: 70%;
   padding: 20px;
   justify-content: center;
   align-items: center;
   display: flex;
   flex-direction: column;
   color: #161b68;

    }


&& .close-button {
    
    position: absolute;
    top: 10px;
    right: 5px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    
} 

 && .img {
    width: 50%;
 }

 && .form {
   
    width: 90%;
    margin-bottom: 15px

 } 

 && .form label{
    
    display: flex;
    font-size: 14px;
    color: #161b68;   

 }

 && .form input{

  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #161b68;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

 }


&& .form-group {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    gap:40px;
   
 }
  && .form-cad {
    display: flex;
    flex-direction: column;
    
  }
  && .form-cpf {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
   
  }

 && .form-contato{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    gap:40px;
 }
 && .Input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #161b68;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;


 }


 && .form-contato{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    gap:40px;

}
&& .form-tel{
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    
}
&& .form-cel{
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;

}

&& .form-tel input{
   width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 1px solid #161b68;

}

&& .form-cel input{
   width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 1px solid #161b68;

    
}


//botões de editar e deletar 

&& .form-actions {
   position: absolute;
   bottom: 14px;
   right: 30px;
   display: flex;
   justify-content: space-between;
   margin-top: 20px;
   gap: 10px ;
   margin-left: 30px;

 }
&& .edit{

color: #fff;
padding: 10px 30px;
background-color: #4CAF50;
border: 10px;
border-radius: 10px;
}

&& .del{
color: #fff;
padding: 10px 30px;
background-color: #8A2B2B;
border: 10px;
border-radius: 10px;
}
 
`;
