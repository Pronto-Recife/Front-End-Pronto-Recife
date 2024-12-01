import styled from "styled-components";

export const Container = styled.button` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6af670;
  border-radius: 30px;
  border: none;
  color: #161b68;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;


  padding: ${(props) => 
    props.size === "home"
    ? "12px 45px"
    : props.size === "login"
    ? "12px 45px"
    : "12px 45px"
  };
  
  font-size: ${(props) => 
    props.size === "home"
    ? "1rem"
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

    padding: ${(props) => 
    props.size === "home"
    ? "8px 70px"
    : "8px 60px"
  };
    
    font-size: ${(props) => 
      props.size === "home"
      ? "0.7rem"
      : props.size === "login"
      ? "0.9rem"
      : "0.9rem"
    };
  }
`;
