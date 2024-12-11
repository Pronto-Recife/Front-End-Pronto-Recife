import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    height: 50%;
    width: 23%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h3 {
      color: #161b68;
    }
  }

  .text {
    color: #fff;
    border-radius: 10px;
    width: 50%;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grup {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: auto;
    margin-bottom: 40px;
  }

  .confirmar {
    border-radius: 20px;
    background: #161b68;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  .cancelar {
    border-radius: 20px;
    border: 2px solid #161b68;
    background: #fff;
    color: #161b68;
    padding: 10px 20px;
    cursor: pointer;
  }

  button {
    margin: 10px;
    border: 2px solid #161b68;
    font-weight: 600;
    cursor: pointer;
  }
`;
