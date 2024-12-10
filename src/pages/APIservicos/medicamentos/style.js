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
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;

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
  padding: 10px 20px;

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
    color: #161b68;
    margin-bottom: 10px;
  }

  section {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  h2 {
    font-size: 20px;
    color: #161b68;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  .doc ul {
    font-size: 16px;
    color: #555;
  }

  .doc ul {
    list-style-type: disc;
    margin-left: 20px;
  }
`;

export const Content = styled.div`
  padding: 0;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 20px;
    background-color: #5f68f1;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #161b68;
    }
  }
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Card = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;

  p {
    margin: 5px 0;
  }
`;
