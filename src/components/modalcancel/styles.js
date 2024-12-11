import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  color: #161B68;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000; 

  .modal {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
    }

    .confirmar {
      background: #d9534f;
      color: #fff;
    }

    .cancelar {
      background: #f0f0f0;
      color: #333;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
