import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #161b68, #5f68f1);
  font-family: "Poppins", sans-serif;
  
    .ContainerInfo {
    height: 27rem;
    width: 18rem;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 9px;
    padding: 4rem 3rem 4rem 3rem;
    background-color: #f1f1f1;
    border-radius: 1.25rem 0 0 1.25rem;
  }

.ContainerInfo .logo {
    max-width: 90%;
    padding-bottom: 15px;
  }

.ContainerInfo  h3 {
   font-size: 0.8em;
   text-align: center;
   font-weight: 600;
   color: #2B318A;
  }

.ContainerInfo h4 {
    text-align: center;
    color:#2B318A;
    font-size: 0.9em;
}

.ContainerInfo .icons {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

&& .button {
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
    font-family: 'poppins';
    font-weight: 800;
    cursor: pointer;

    transition: background-color 0.3s ease-out, color 0.3s ease-out;

    &:hover {
      background-color: #2b318a;
      color: #fff;
    }
  }

      
  .container-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 27rem;
    height: 27rem;
    padding: 50px 30px 30px 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0 20px 20px 0;
    color: #2b318a;

    .documento {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 39px;
      padding: 9px;
      width: 90%; 
      font-size: 14px;
      border-radius: 8px;
      background-color: #DEE0FB;
      border-bottom: 5px solid #161B68;
      color: #161B68;
    }


    h1 {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #f1f1f1;
    }

    label {
      font-size: 0.9rem;
      margin-bottom: 5px;
      color: #fff;
      font-weight: 700;
    }

    .password-container input {
    height: 39px;
    padding: 10px;
    width: 90%; 
    font-size: 14px;
    border-radius: 8px  ;
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
      color: #f1f1f1;
      font-weight: bold;
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
      }

      .button-login {
        width: 90%;
        font-size: 0.8rem;
      }
    }

    .container-cadastro, 
    .button-cadastro {
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
