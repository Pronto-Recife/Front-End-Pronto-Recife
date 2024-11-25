import styled from "styled-components";

export const Container = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2rem;
  background-color: #6af670;
  border-radius: 30px;
  padding: 9px;
  border: none;
  color: #161b68;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;

  font-size: ${(props) => 
    props.size === "home"
    ? "0.9rem"
    : props.size === "login"
    ? "0.9rem"
    : props.size === "entrar"
    ? "0.9rem"
    : "1rem"
  };

  &:hover {
    background-color: #2b318a;
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ajustando para 100% da largura no mobile */
    height: auto; /* Ajustando a altura automática no mobile */
    
    font-size: ${(props) => 
      props.size === "home"
      ? "0.9rem"
      : props.size === "login"
      ? "0.9rem"
      : "0.9rem"
    };
  }
`;
