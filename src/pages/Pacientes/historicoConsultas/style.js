import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
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

export const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  color: white;

  nav {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 200px;
    height: calc(100vh - 60px);
    background-color: #fff;
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

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161B68;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #161B68;
  }

  @media (max-width: 768px) {
    margin: 80px 20px 20px 20px;
  }
`;


export const List = styled.div`
background-color: #EAEBFC;
border-radius: 10px;
border: #161B68 solid 2px;
padding: 15px;
margin-top: 10px;
`
export const ListItem = styled.div`

`
export const  Footer = styled.div`

`
export const  Consulta = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const  Info = styled.div``

export const  Btn = styled.div`
margin-top: 20px;

`

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #6AF670;
  color: #161B68;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  margin-right: 10px;

  &:hover {
    background-color: #24E42C;
  }

  &:active {
    background-color: #24E42C;
  }
`;

export const ButtonCancel = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: transparent;
  color: #E42424;
  font-weight: 600;
  border: 2px solid #E42424;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #E42424;
    color: #fff;
  }

  &:active {
    background-color: #E42424;
  }
`;