import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  width: 20rem;

  > img {
    width: 100%;
    height: auto;
    border-radius: 100%;
  }

  && .social-icons {
    display: flex;
    gap: 20px;
  }
`;
