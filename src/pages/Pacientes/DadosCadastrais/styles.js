import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr; 
  grid-template-areas:
    "sidebar main";
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 2fr; 
    grid-template-areas:
      "main";
  }
`;


export const Header = styled.header`
  grid-area: header;
  position: fixed;
  top: 0;
  left: 250px;
  width: calc(100% - 250px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
 
  


  @media (max-width: 768px) {
    left: 0;
    width: 100%;
   
  }
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  color: white;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 200px;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;

export const Main = styled.main`
  grid-area: main;
  margin: 80px 20px 20px 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161B68;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  .Contatos {
    margin-top: 35px;
  }

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    flex-direction: column;


   @media (max-width: 480px ){
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
   }
   
  }
`;

export const Card = styled.div`
  background-color: #EAEBFC;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: 475px;
  height: 70px;

  h3 {
    font-size: 16px;
    color: #161B68;
  }

  p {
    font-size: 14px;
    color: #333;
  }
`;