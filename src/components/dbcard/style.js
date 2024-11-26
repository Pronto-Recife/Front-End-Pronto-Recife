import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #2d2d2d;
  padding: 20px;
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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
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
