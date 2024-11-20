import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #161b68, #5f68f1);
  font-family: "Poppins", sans-serif;

  .container-cadastro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 18.75rem;
    height: 28.125rem;
    padding: 3rem;
    background-color: #ced0e7;
    border-radius: 1.25rem 0 0 1.25rem;

    .logo {
      width: 70%;
    }

    h5 {
      font-size: 0.825rem;
      color: #2b318a;
      margin-top: 15px;
    }

    .visiteno {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .icons {
      display: flex;
      gap: 10px;

      img {
        width: 25px;
        cursor: pointer;
      }
    }
  }

  .container-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 450px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0 20px 20px 0;
    color: #2b318a;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    label {
      font-size: 0.9rem;
      margin-bottom: 5px;
      color: #2b318a;
    }

    .password-container input {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      color: #333;
      box-sizing: border-box;
    }

    .password-container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .eye-icon {
      right: 10px;
      top: 10px;
      cursor: pointer;
      color: #333;
    }

    .forgot-password {
      align-self: flex-start;
      font-size: 0.8rem;
      color: #2b318a;
      margin-bottom: 20px;
      cursor: pointer;
      text-decoration: none;
    }

    .forgot-password:hover {
      text-decoration: underline;
    }
  }

  /* RESPONSIVIDADE */
  @media (max-width: 1024px) {
    .container-cadastro {
      width: 250px;
      height: 400px;

      .logo {
        width: 80%;
      }

      h5 {
        font-size: 0.9rem;
      }

      .button-cadastro {
        width: 100%;
        font-size: 0.9rem;
      }
    }

    .container-login {
      width: 350px;
      height: 400px;

      h1 {
        font-size: 1.2rem;
      }

      .button-login {
        width: 80%;
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .container-cadastro,
    .container-login {
      width: 90%;
      height: auto;
      border-radius: 20px;
    }

    .container-login {
      margin-top: 20px;
      padding: 15px;

      h1 {
        font-size: 1rem;
      }

      .input {
        font-size: 0.9rem;
        padding: 10px;
      }

      .button-login {
        width: 90%;
        font-size: 0.8rem;
      }
    }

    .container-cadastro .button-cadastro {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    .container-cadastro,
    .container-login {
      width: 100%;
      border-radius: 0;
      padding: 10px;
    }

    .container-cadastro h5,
    .container-login h1 {
      font-size: 0.9rem;
    }

    .input {
      font-size: 0.8rem;
    }

    .button-login,
    .button-cadastro {
      font-size: 0.8rem;
    }
  }
`;
