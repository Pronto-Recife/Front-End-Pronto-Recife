import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 1rem;
    color: #161B68;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 2rem;
  }
`;

export const Info = styled.div`
  h2 {
    margin-bottom: 1rem;
    color: #161B68;
  }

  p {
    margin: 0.3rem 0;
  }

  strong {
    color: #161B68;
  }
`;

export const Prescriptions = styled.div`
  margin-bottom: 2rem;
`;

export const PrescriptionCard = styled.div`
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  h3 {
    color: #161B68;
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-top: 1rem;
    color: #161B68;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #030F41; 
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: none; 
    transform: scale(1.1); 
  }

  svg {
    margin-bottom: 0.5rem; /
  }
`;
