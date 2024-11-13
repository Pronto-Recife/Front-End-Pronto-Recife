import styled from "styled-components";
import Fundoimg from "../../assets/fundoimg.png";

export const Container = styled.div`
  /* Navbar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .logo img {
      width: 25.875rem;
      margin-left: 5rem;
    }

    .nav-links {
      display: flex;
      list-style: none;
      font-size: 2rem;
      gap: 80px;

      li {
        margin: 0 1rem;

        a {
          text-decoration: none;
          color: #fff;
          font-weight: bold;
          transition: color 0.3s;

          &:hover {
            color: #6af670;
          }
        }
      }
    }

    .auth-buttons {
      button {
        border: none;
        border-radius: 15px;
        width: 20.625rem;
        height: 60px;
        margin-right: 5rem;
        background: #6af670;
        font-size: 2rem;
        cursor: pointer;
        font-weight: bold;

        .login-button,
        .signup-button {
          text-decoration: none;
          font-weight: bold;
          color: #2b318a;
          transition: color 0.3s;

          &:hover {
            color: #0056b3;
          }
        }
      }
    }
  }
  /* Intro (Hero) */
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 8rem 2rem;
    background-image: url(${Fundoimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .intro-text {
      max-width: 50%;
      margin: 0 5rem 0 5rem;

      h1 {
        font-weight: 800;
        font-size: 6rem;
        color: #2b318a;
        margin-bottom: 2rem;
      }

      p {
        font-size: 2.5rem;
        color: #2b318a;
        margin-bottom: 5rem;
      }

      .intro-buttons {

        button {
          text-decoration: none;
          color: #2b318a;
          font-weight: 700;
          border: none;
          box-shadow: #000;
          border-radius: 50px;
          width: 20.625rem;
          height: 60px;
          margin-right: 5rem;
          background-color: #6af670;
          font-size: 2rem;
          cursor: pointer;
          transition: .3s ease-out;

        }

        button:hover {
            background-color: #007bff;
            color: #f1f1f1;
          }
      }
    }
  }

  .services {
    display: flex;
    justify-content: space-around;
    padding: 4rem 5rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);

    .service-item {
      max-width: 15%;
      text-align: center;
      background-color: #f1f1f1;
      border-radius: 20px;

      img {
        width: 6.25rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }

      p {
        font-size: 20px;
        margin-bottom: 2rem;
      }

      .button {
        color: #161b68;
        border: none;
        border-radius: 15px;
        width: 20.625rem;
        height: 60px;
        background: #6af670;
        font-size: 2rem;
        cursor: pointer;
        font-weight: bold;

        &:hover {
          background-color: #0056b3;
          color: #fff;
        }
      }
    }
  }

  .info {
    text-align: center;
    padding: 4rem 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2rem;
    }

    .info-buttons {
      button {
        margin-right: 1rem;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s;

        &.green {
          background-color: #28a745;
          color: #fff;

          &:hover {
            background-color: #218838;
          }
        }

        &.blue {
          background-color: #007bff;
          color: #fff;

          &:hover {
            background-color: #0056b3;
          }
        }
      }
    }

    .info-image {
      img {
        max-width: 100%;
        margin-top: 2rem;
      }
    }
  }

  .clinics {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .clinic-list {
      display: flex;
      justify-content: space-around;

      img {
        max-width: 15%;
        border-radius: 10px;
      }
    }
  }

  .map {
    text-align: center;
    padding: 4rem 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    input {
      padding: 0.5rem;
      font-size: 1rem;
      margin-bottom: 2rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 80%;
    }

    .map-container {
      img {
        max-width: 100%;
        border-radius: 10px;
      }
    }
  }

  .team {
    text-align: center;
    padding: 4rem 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .team-members {
      display: flex;
      justify-content: space-around;

      .team-member {
        max-width: 20%;
        text-align: center;

        img {
          width: 100%;
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 0.5rem;
        }

        p {
          margin-bottom: 1rem;
        }

        .social-icons {
          display: flex;
          justify-content: center;

          a {
            margin: 0 0.5rem;

            img {
              width: 24px;
            }
          }
        }
      }
    }
  }

  .footer {
    background-color: #2b318a;
    color: #fff;
    padding: 0;

    .footer-content {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .footer-logo img {
        width: 18.75rem;
      }

      .footer-info {
        p {
          margin-bottom: 1rem;
          font-size: 1.5rem;

          img {
            margin-right: 0.5rem;
          }
        }
      }

      .footer-links,
      .footer-navegacao {
        display: flex;
        flex-direction: column;

        a {
          color: #fff;
          text-decoration: none;
          margin-bottom: 0.5rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .copy {
      text-align: center;
      margin-top: 2rem;
      background-color: #161b68;
      justify-content: space-between;
      font-size: 1.5rem;

      p {
        margin: 0;
      }
    }

    .footer-social-icons {
      text-align: center;
      margin-top: 1rem;

      a {
        margin: 0 0.5rem;

        img {
          width: 24px;
        }
      }
    }
  }
`;
