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
  padding: 10px 10px;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
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

  h3 {
    margin-bottom: 10px;
    color: #161B68;
  }

`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Feature = styled.section`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-bottom: 20px;

  h4 {
    font-size: 20px;
    color: #030f41;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
  }
`;

