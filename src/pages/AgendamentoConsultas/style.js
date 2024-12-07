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

  h2 {
    color: #666666;
  }

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

  @media (max-width: 768px) {
    margin: 80px 20px 20px 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-top: 20px;
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

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;


  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #161B68;
  }

  select, input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    color: #161B68;
    width: 760px;

    &:focus {
      border-color: #161B68;
    }
  }
`;

export const Horarios = styled.div`
display: flex;
justify-content: start;
align-items: center;
gap: 17px;



button {
    
    padding: 10px 20px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    font-weight: 700;
    border: none;
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    color: ${({ isSelected }) => (isSelected ? "#fff" : "#161B68")};
    background-color: ${({ isSelected }) => (isSelected ? "#161B68" : "#f0f0f0")};
    cursor: pointer;
}

:hover {
    color: #fff;
    background-color: ${({ isSelected }) => (isSelected ? "#1d265d" : "#161B68")};
}
`;

export const DivFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

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
  background-color: #FFF;
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

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  h4 {
    font-size: 18px;
    color: #161B68;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: flex-start;
`;

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 14px;
    color: #161B68;
  }

  textarea {
    padding: 10px;
    font-size: 14px;
    color: #161B68;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
    resize: vertical;
    min-height: 100px;
    transition: border 0.3s ease;

    &:focus {
      border-color: #161B68;
    }
  }
`;

