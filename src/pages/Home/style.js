import styled from "styled-components";
import Fundoimg from "../../assets/fundoimg.png";

export const Container = styled.div`
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    padding: 7rem 1rem;
    background-image: url(${Fundoimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .intro-text {
      max-width: 60%;
      margin-left: 5rem;
      margin-right: 5rem;

      h1 {

        font-size: 2.2em;
        font-weight: 800;
        color: #2b318a;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2em;
        font-weight: 500;
        color: #2b318a;
        margin-bottom: 2rem;
        padding: 10px;
        border-radius: 20px;
      }
    }
  }

  .intro-buttons {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    padding-bottom: 15px;
  }

  .line {
    background-color: #6af670;
    width: 197px;
    height: 5px;
    border-radius: 20px;
    margin-bottom: 1rem;

  }

  .services {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 6rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
  }

  .service-item {
    width: 25rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    text-align: center;
    background-color: #f1f1f1;
    border-radius: 20px;
    padding: 1rem;


    img {
      width: 5rem;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1em;
      margin-bottom: 1.5rem;
    }

    
  }

.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4rem 2.6rem;
  gap: 70px;

  .info-text {
  max-width: 55%;
  
  }

  .info-text h2 {
    font-weight: 800;
    font-size: 2.5em;
    margin-bottom: 1rem;
    color: #161b68;
  }

  .info-buttons {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  }

  .info-text p {
    color: #2b318a;
    margin-bottom: 1.5rem;
    font-size: 1.2em;
  }

  }

  .info-image img {
    width: 100%;
    max-width: 25rem;
    margin-top: 2rem;
    transition: transform 0.3s ease-out;
  }

  .info-image img:hover {
  transform: scale(1.1);
}
  .clinics {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
    color: #f1f1f1;
    margin: auto;
    padding: 2rem 6rem;
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
    padding: 3rem;
  }

  .map-card {
    width: 60rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    
  }

  .map-card img {
    height: 100%;
    width: 20%;
  }

  .input {
    max-width: 50%;
    font-size: 1.25rem;
    color: #2b318a;
  }

  .map-text {
    font-size: 1rem;
  }
  .map-text img {
    width: 60px;
    margin: 10px;
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

  .map-text h2{

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
    outline: none;
    font-size: 20px;
    width: 80%;
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
    padding: 5.9rem;
  }

  .team h2 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #161b68;
  }


  .footer {
    background-color: #2b318a;
    color: #fff;
  }

  .linha {
    border-left: none;
    border-bottom: none;
    border-top: none;
  }

  .footer-info {
    max-width: 100%;
  }

  .footer-title {
    color: #6af670;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-content: center;
    justify-content: center;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  .footer-logo img {
    width: 15rem;
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
    justify-content: space-between;
    background-color: #161b68;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .footer-social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .footer-social-icons img {
    width: 20px;
  }

  @media (max-width: 768px) {
    .intro {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      

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
      
      .service-item {
      width: 90%;
      max-width: 25rem;
      height: auto;
      padding: 1rem;
    }
     
    .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

    img {
    max-width: 100%;
    height: auto;
  }

  
    }

    @media (max-width: 480px) {
  .intro {
    padding: 2rem 1rem;
  }

  .intro-text h1 {
    font-size: 1.8rem;
  }

  .service-item {
    width: 100%;
    height: auto;
  }
}


    .buttons {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }


    .services {
    flex-direction: column;
    padding: 3rem;
  }

    
    .service-item {
      width: 70%;
      height: 80%;
      margin-bottom: 1rem;
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


    }

    .map {
      flex-direction: column;
      height: auto;

      .map-card {
        width: 100%;
        height: auto;
        border-radius: 10px;
        flex-direction: column;
      }

      
    }

    .maps {
      width: 100%;
      height: 300px;
    }

    .maps iframe {
      width: 100%;
      height: 100%;
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
      margin: 0.9rem;
      font-size: 0.em;
    }

    .footer-social-icons {
      margin: 0 2rem;
    }
  }

  @media screen and (max-width: 490px) {
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
`;
