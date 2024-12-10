import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
  }

  && .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #fff;
  }

  && .container {
    display: flex;
    align-items: center;
    gap:20px ;
    width: 100%;
  }

  && .listitem {
    background-color: #161b68;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    gap: 15px;
    width: 100%;
  }

  && .item {
    display: flex;
    flex-direction: column;
  }

  && .contentButton {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  && .idButton {
    padding: 7px 10px;
    border: 1.5px solid #161b68;
    border-radius: 6px;
    font-size: 16px;
    color: #161b68;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  && .button {
    background-color: #161b68;
    border: none;
    cursor: pointer;
 
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
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161b68;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dee0ff;
  border-radius: 40px;
  width: 60%;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 30px;

  .box {
    border: none;
    outline: none;
    background: transparent;
  }

  .searchbutton {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const Buton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  && .prof {
    border: none;
    border-radius: 30px;
    color: #161b68;
    background-color: #eaebfc;
    padding: 10px 50px;
    font-size: 16px;
    color: #161b68;
    font-weight: 600;
  }

  && .paci {
    border: none;
    border-radius: 30px;
    color: #f1f1f1;
    background-color: #161b68;
    padding: 10px 50px;
    font-size: 16px;
    font-weight: 600;
  }

`;
