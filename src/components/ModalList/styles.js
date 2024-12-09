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
   height: 60%;
   padding: 20px;
   gap: 10px;
   justify-content: center;
   align-items: center;
   display: flex;
   flex-direction: column;
   color: #161b68;
   width: 500px;

    }


&& .close-button {
    
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
   
} 
&& .Icon{
   width: 60%;
}

 
 && .form {
  
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

 } 

 && .form label{
    
    display: flex;
    font-size: 14px;
    color: #161b68;   
    font-weight: bold;


 }
 && .form strong{

    display: flex;
    font-size: 14px;
    color: #161b68;   
    font-weight: bold;

 }

 && .form .input{

  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1.5px solid #161b68;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

 }




//botões de editar e deletar 

&& .form-actions {
   position: absolute;
   bottom:40px;
   width: 100%;
   display: flex;
   justify-content: center;
   gap: 20px ;
 }
&& .edit{
color: #fff;
padding: 12px 50px;
background-color: #4CAF50;
border: none;
border-radius: 10px;
cursor: pointer;
}
&& .edit:hover{
background-color: #161b68;
}

&& .del{
cursor: pointer;
color: #fff;
padding: 12px 50px;
background-color: #8A2B2B;
border: none;
border-radius: 10px;
}
&& .del:hover {  
   background-color: #161b68;
}
 
`;

