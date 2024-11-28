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
      "main"
      "footer";
    margin-left: 0;
  }
`;

export const Sidebar = styled.div`
  grid-area: sidebar;

`;

export const MainContent = styled.main`
  grid-area: main;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px 20px 0px;
  margin-left: 50px;
  
  h1 {
    font-size: 35px;
    font-weight: bold;
    color: #161B68;
    white-space: nowrap;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f1f1f1;
  border-radius: 30px;
  margin-right: 50px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #c1c1c1;
  border-radius: 20px;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  img {
    margin-left: 50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 2rem;

  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    
    flex: 1;
    margin-right: 1rem;
  }

  p {
    margin: 0.3rem 0;
    color: #161B68;
  }
`;

export const Prescriptions = styled.div`
  margin-bottom: 2rem;
  margin-left: 50px;
  margin-right: 50px;
`;

export const PrescriptionCard = styled.div`
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  h3 {
    color: #161B68;
    display: inline-block;
    margin-right: 1rem;
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

export const VejaMaisButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #030F41; 
  font-weight: 600;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
  align-self: flex-end;

  &:hover {
    background-color: none; 
    transform: scale(1.1); 
  }

  svg {
    margin-right: 0.5rem;
  }
`;


