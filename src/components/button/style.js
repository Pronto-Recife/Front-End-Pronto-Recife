import styled from "styled-components";

export const Container = styled.button` 
  padding: ${(props) =>
    props.size === "home"
    ? "20px 80px"
    : props.size === "login"
    ? "15px 50px"
    : props.size === "entrar"
    ? "15px 80px"
    : "15px 50px"
  };

  font-size: ${(props) => 
  props.size === "home"
  ? "1.5rem"
  : props.size === "login"
  ? "1.125rem"
  : props.size === "entrar"
  ? "1.125rem"
  : "1rem"
  };

  font-weight: ${(props) => 
    props.size === "home"
    ? "700"
    : props.size === "login"
    ? "500"
    : props.size === "entrar"
    ? "500"
    : "500"
   };

  
  cursor: pointer;
  border: none;
  background-color: #6af670;
  color: #2b318a;
  border-radius: 50px;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
  font-weight: 700;


  &:hover {
      background-color: #2b318a;
      color: #fff;
    }

    @media (max-width: 768px) {
      padding: ${(props) =>
    props.size === "home"
    ? "10px 50px"
    : props.size === "login"
    ? "15px 50px"
    : props.size === "entrar"
    ? "15px 80px"
    : "15px 50px"
   };

    font-size: ${(props) => 
    props.size === "home"
    ? "1.125rem"
    : props.size === "login"
    ? "1.5rem"
    : "1.125rem"
    }

    }

`


    

 
