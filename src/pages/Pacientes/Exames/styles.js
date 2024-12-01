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

export const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-top: 20px;
  margin-right: 50px;
`;

export const Card = styled.div`
  flex: 1;
  background-color: #EAEBFC;
  color: #161B68;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s;
  border: #161B68;
  
 
  li {
    font-size: 14px;
    color: #161B68;
    margin: 15px;
    background-color: #f0f1ff;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;
    list-style: none;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }

  &:hover {
    background-color: #C6C9FF;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #161B68;
  }

  select {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    color: #161B68;
  }
`;

export const HistoryText = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
`;

export const Footer = styled.footer`
  grid-area: footer;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;