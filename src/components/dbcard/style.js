import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #EAEBFC;
  
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap; 
  overflow-x: auto; 
  width: 100%;
`;

export const Card = styled.div`
  background-color: #f5f5ff;
  border-radius: 10px;
  padding: 20px;
  width: 150px; 
  height: 150px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #C6C9FF;
  }


  @media (max-width: 768px) {
    width: 120px; 
    height: 120px;
  }
`;

export const Icon = styled.div`
  font-size: 36px;
  color: #161B68;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #161B68;
`;
