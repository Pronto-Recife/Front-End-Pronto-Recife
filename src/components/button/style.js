import styled from "styled-components";

export const Container = styled.button` 
  padding: ${(props) =>
    props.size === "home"
    ? "20px 80px"
    : props.size === "login"
    ? "40px 248px"
    : "50px 220px"
  };

  font-size: ${(props) => 
  props.size === "home"
  ? " 1.5rem"
  : props.size === "login"
  ? "1rem"
  : "1rem"
  };

  font-weight: ${(props) => 
    props.size === "home"
    ? "700"
    : props.size === "login"
    ? "600"
    : "600"
   };

  cursor: pointer;
  border: none;
  background-color: #6af670;
  color: #2b318a;
  border-radius: 50px;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
  

  &:hover {
      background-color: #2b318a;
      color: #fff;
    }
`

/* 
.btn {
    display: flex;
    gap: 10px;
  }

  .btn button {
    font-weight: 700;
    border: none;
    width: 13.75rem;
    height: 3.125rem;
    cursor: pointer;
    

    
  }

  @media (max-width: 768px) {
    .btn {
    justify-content: center;
        }
    } */


