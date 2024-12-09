import styled from "styled-components";

export const Container = styled.div`
 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  && .modal {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: white;
   border-radius: 20px;
   height: 30%;
   padding: 20px;
   gap: 20px;
   justify-content: center;
   align-items: center;
   display: flex;
   flex-direction: column;
   width: 23%;

}
&& .modal h3{
   color: #161b68;
}

&& .text {

 color: #fff;
 border-radius: 10px;
 width: 50%;
 font-size: 18px;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 font-size: 18px;

}

 
&& .grup {
   bottom:40px;
   width: 100%;
   display: flex;
   justify-content: center;
   gap: 20px ;
}
&& .confirmar{
   border-radius: 20px;
   background: #161b68;
   color: white;
   padding: 10px 20px;

}


&& .cancelar{

  border-radius: 20px;
  border:2px solid #161b68 ;
  background: #fff;
  padding: 10px 20px;

}

`;

