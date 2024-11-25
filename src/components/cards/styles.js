import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  padding: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 24rem;
  background-color: #EAEBFC;
  border-radius: 18px;
  row-gap: 4px;

  > img {
    width: 80%;
    padding: 1rem;
    height: auto;
    border-radius: 100%;
  }

  && .social-icons {
    display: flex;
    gap: 10px;
  }

  && .team-name {
    font-size: 1rem;
    margin: 0;
    color: #161b68;
  }

  && .team-dev {
    color: #161b68;
  }

  && .team-cargo {
    padding: 5px;
    color: #2b318a;
    font-size: 1rem;
    text-align: center;
  }


  /* Responsividade */
  @media (max-width: 768px) {
    > div {
      flex: 1 1 calc(50% - 20px);
    }
    width: 12rem;
    height: 20rem;

    && .team-name {
      font-size: 1.1rem;
    }

    && .team-dev {
      font-size: 1rem;
    }

    && .team-cargo {
      font-size: 0.9rem;
    }

    > img {
      width: 80%;
    }

    && .social-icons {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    > div {
      flex: 1 1 100%; 
    width: 12rem;
    height: 18rem;

    && .team-name {
      font-size: 1.1rem;
    }

    && .team-cargo {
      font-size: 0.8rem;
    }

    > img {
      width: 60%;
    }
  }
  }
  `; 
