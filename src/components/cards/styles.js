import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 26rem;
  background-color: #EAEBFC;
  border-radius: 20px;
  row-gap: 5px;

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
    font-size: 1.5rem;
    margin: 0;
    color: #161b68;
  }

  && .team-dev {
    color: #6af670;
  }

  && .team-cargo {
    padding: 5px;
    color: #2b318a;
    font-size: 1rem;
    text-align: center;
  }
`;
