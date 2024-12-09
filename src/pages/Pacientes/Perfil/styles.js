import styled from 'styled-components';

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
  display: flex;
  margin: 80px 20px 20px 20px;
  gap: 50px;
  padding: 20px;
  

  h2 {
    font-size: 24px;
    margin-bottom: 5px;
    color: #161B68;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161B68;
    margin-bottom: 15px;   
  }

  p {
    font-size: 14px;
    color: #161B68;
    line-height: 1.5;

  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    flex-direction: column;
    
   
   }
`;

export const Button = styled.button`
  background-color: #6AF670;
  color: #161B68;
  font-weight: 600;
  margin: 10px 0;
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #24E42C;
  }
`;

export const Paciente = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

export const Inf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  align-items: center;

  .dados-pessoais {
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #444;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .dados-cadastrais {
      grid-template-columns: 1fr;
    }
  }
`;



export const Historico = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
  background-color: #EAEBFC;
  padding: 20px;
  margin: 20px 20px;
  gap: 20px;
  display: flex;
  
  h3 {
    font-size: 20px;
    color: #161B68;
    margin-left: 10px;
    margin-bottom: 10px;
   
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;

export const Card = styled.div`
  background-color: #EAEBFC;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  height: 50px;

  h3 {
    font-size: 16px;
    color: #161B68;
  }

  p {
    font-size: 12px;
    color: #333;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .paciente {
      
    }
  }

  
 
`;
