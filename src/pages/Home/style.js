import styled from "styled-components";
import Fundoimg from "../../assets/fundoimg.png";

export const Container = styled.div`
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 4rem 1rem;
    background-image: url(${Fundoimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .intro-text {
      max-width: 60%;
      margin: 0 2rem;

      h1 {
        font-weight: 800;
        font-size: 4rem;
        color: #2b318a;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.8rem;
        color: #2b318a;
        margin-bottom: 3rem;
      }
    }
  }

  .line {
    background-color: #6af670;
    width: 160px;
    height: 5px;
    border-radius: 20px;
    margin-bottom: 1rem;
  }

  .services {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 2rem 2rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);

    .service-item {
      text-align: center;
      background-color: #f1f1f1;
      border-radius: 30px;
      padding: 1rem;

      img {
        width: 5rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }

      button {
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
          background-color: #0056b3;
          color: #fff;
        }
      }
    }
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 2rem;
    justify-content: space-between;

    .info-text {
      max-width: 60%;
    }

    .info-text h2 {
      font-weight: 800;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #161b68;
    }

    .info-text p {
      color: #2b318a;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    button {
      text-decoration: none;
      width: 14rem;
      height: 50px;
      border: none;
      border-radius: 50px;
      background-color: #6af670;
      font-size: 1.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease-out, color 0.3s ease-out;

      &:hover {
        background-color: #0056b3;
        color: #fff;
      }
    }

    .info-image img {
      width: 100%;
      max-width: 30rem;
      margin-top: 2rem;
      transition: transform 0.3s ease-out;
    }

    .info-image img:hover {
  transform: scale(1.1);
}
  }

  .clinics {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 2rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
    color: #f1f1f1;
    gap: 15px;
  }

  .clinic-list img {
    transition: transform 0.3s ease-out;
  }

  .clinic-list img:hover {
    transform: scale(1.1);
  }
  .clinic-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .clinics-left h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  .map {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 26.25rem;
    padding: 30px;
  }

  .map-card {
    width: 60rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    border-radius: 20px;
  }

  .map-card img {
    height: 100%;
    width: 50%;
  }

  .input {
    max-width: 80%;
    font-size: 1.25rem;
    color: #2b318a;
  }

  .map-text {
    font-size: 1.125rem;
  }
  .map-text img {
    width: 150px;
  }

  .map-container img {
    width: 100%;
  }

  .map-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    margin-bottom: 2rem;
  }

  .procura {
    background-color: #f1f1f1;
    padding: 5px;
    border: 10px solid #ccc;
    font-size: 1.125rem;
    border-radius: 90px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0px 10px;
    gap: 20px;
  }

  .procura img {
    width: 30px;
  }

  .procura input {
    background-color: transparent;
    border: none;
    font-size: 20px;
  }

  .map-container {
    max-width: 100%;
    display: flex;
    justify-content: end;
  }

  .map-container img {
    border-radius: 15px;
  }

  .team {
    color: #161b68;
    padding: 4rem 2rem;
  }

  .team h2 {
    font-weight: 800;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #161b68;
  }

  /* Footer */
  .footer {
    background-color: #2b318a;
    color: #fff;
  }

  .linha {
    border-left: none;
    border-bottom: none;
    border-top: none;
  }

  .footer-title {
    color: #6af670;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-content: center;
    justify-content: center;
    padding: 2rem;
  }
  .footer-logo img {
    width: 19rem;
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
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

  .copy {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #161b68;
    height: 4rem;
  }

  .footer-social-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  .footer-social-icons img {
    width: 30px;
  }

  @media (max-width: 768px) {
    .intro {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2rem;

      .intro-text {
        max-width: 100%;
        margin: 0;

        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }

    .services {
      flex-direction: column;

      .service-item {
        width: 100%;
        margin-bottom: 1rem;
      }
    }

    .info {
      flex-direction: column;
      text-align: start;

      .info-text {
        max-width: 100%;

        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }

      .info-image {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
      }

      .info-image img {
        width: 100%;
      }
    }

    .clinics {
      flex-direction: column;
      gap: 1rem;

      .clinics-left {
        flex-direction: column;
      }

      .clinics-video {
      }
    }

    .map {
      flex-direction: column;
      height: auto;

      .map-card {
        width: 100%;
        height: auto;
        flex-direction: column;
      }

      .map-card img {
        width: 100%;
        height: auto;
      }
    }

    .map-text {
      margin-top: 10px;
    }

    .team h2 {
      font-size: 2rem;
      text-align: center;
    }

    .footer-content {
      grid-template-columns: 1fr;
      text-align: start;
    }

    .footer-info {
      margin-bottom: 10px;
    }

    .footer-info p {
      margin-bottom: 10px;
    }

    .footer-logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .footer-links h1 {
      font-size: 1.5rem;
    }
    .footer-links {
      display: flex;
      justify-content: start;
      align-items: start;
    }

    .footer-logo img {
      margin-bottom: 1rem;
    }

    .footer-social-icons {
      justify-content: center;
      gap: 1rem;
    }

    .copy-text {
      margin: 0 2rem;
      font-size: 0.8rem;
    }

    .footer-social-icons {
      margin: 0 2rem;
    }
  }
`;
