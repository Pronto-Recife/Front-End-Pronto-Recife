import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
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

export const Main = styled.main`
  grid-area: main;
  margin: 80px 20px 30px 20px;
  background-color: #fff;
  padding: 0px;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161B68;
    margin-bottom: 10px;
    margin-left: 20px;
  }

  span {
    color: #161B68;
  }
  
  p { 
    margin: 0px 20px;
  }
`;

export const Content = styled.div`
  margin-top: 0px;
`;

export const Button = styled.button`
  margin: 10px 0;
  background-color: #161B68;
  color: #fff;
  border: none;
  padding: 5px 20px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2a3587;
    transform: scale(1.05);
  }

  &:active {
    background-color: #0f1436;
  }
`;

export const Card = styled.div`
background-color: #ccc;
margin: 10px 0;
padding: 20px;
border-radius: 20px;
`
