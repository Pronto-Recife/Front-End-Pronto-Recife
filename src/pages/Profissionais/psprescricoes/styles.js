import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
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
    height: calc(100vh - 60px);
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
    color: #666;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px 0;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  background-color: #dee0ff;
  border-radius: 40px;
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

export const Content = styled.div`
  background: white;
  border: 2px solid #161b68;
  border-radius: 10px;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  text-align: center;

  img {
    max-width: 200px;
  }

  .title {
    margin-top: 10px;
    color: #161b68;
    font-size: 20px;
  }
`;

export const TextContext = styled.div`
  margin: 20px 0;

  h2 {
    color: #161b68;
    margin-top: 15px;
  }

  p {
    margin-bottom: 10px;
  }
`;

export const FooterContent = styled.footer`
  margin-top: 20px;
  padding: 10px;
  text-align: right;

  p {
    margin: 5px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 30px;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #161B68;
  font-weight: 600;
  background-color: #161b68;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a1234;
  }

  &.imprimir {
    background-color: #6AF670;
  }

  &.imprimir:hover {
    background-color: #24E42C;
  }

  &.enviar-email {
    background-color: #6AF670;
  }

  &.enviar-email:hover {
    background-color: #24E42C;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 20px;
  
  li {
    margin-bottom: 10px;
    font-size: 16px;
    color: #666;
  }`
