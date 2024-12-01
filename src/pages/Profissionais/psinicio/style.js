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
  margin: 80px 20px 90px 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: grid;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161b68;
  }

  @media (max-width: 768px) {
    margin: 80px 20px 20px 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Footer = styled.footer`
  grid-area: footer;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
