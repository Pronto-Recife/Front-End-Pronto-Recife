import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "sidebar main";
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "main";
  }
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  color: white;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
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
  background-color: #ffffff;
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
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161b68;
    margin-bottom: 20px;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;

  input {
    width: 90%;
    padding: 10px;
    border: none;
    font-size: 16px;
  }

  button {
    border: none;
    padding: 10px 10px;
    cursor: pointer;
  }
`;

export const ResultsTitle = styled.div`
  font-size: 16px;
  color: #161b68;
`;

export const Cardlist = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #eaebfc;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  .img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  .informacoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .informacoes h2 {
      font-size: 20px;
      color: #161b68;
    }

    .informacoes p {
      font-size: 14px;
      color: #666;
    }

    .info {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .info strong {
        color: #161b68;
      }

    .botao {
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 10px;
    }

    .botao button {
        background-color: #6AF670;
        color: #161B68;
        font-weight: 600;
        border: none;
        padding: 8px 12px;
        border-radius: 20px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #24E42C;
        }
      }
`;

export const VejaMaisButton = styled.button`
  color: #161b68;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  cursor: pointer;
`;

export const SearchBar = styled.div`

`;
