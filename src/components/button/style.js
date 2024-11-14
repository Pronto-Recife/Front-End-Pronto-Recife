import styled from "styled-components";

export const Container = styled.div` 

.btn {
    display: flex;
    gap: 10px;
  }

  .btn button {
    text-decoration: none;
    color: #2b318a;
    font-weight: 700;
    border: none;
    border-radius: 50px;
    width: 14rem;
    height: 50px;
    background-color: #6af670;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease-out, color 0.3s ease-out;

    &:hover {
      background-color: #2b318a;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    .btn {
    justify-content: center;
        }
    }

`
