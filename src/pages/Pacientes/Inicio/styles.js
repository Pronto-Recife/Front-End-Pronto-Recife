import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
  }
`;

export const Header = styled.header`
  grid-area: header;
  position: fixed;
  top: 0;
  left: 250px;
  width: calc(100% - 250px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  color: white;

  nav {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: 0;
    width: 200px;
    height: calc(100vh - 60px);
    background-color: #fff;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;

export const Main = styled.main`
  grid-area: main;
  margin: 80px 20px 20px 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #161b68;
    margin-bottom: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }

  @media (max-width: 768px) {
    margin: 80px 20px 20px 20px;
  }
`;

export const CardContainerAtalhos = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;
export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: #161b68;
  width: 250px;
  height: 230px;
  color: #fff;
  padding: 0 0 10px 0;
  transition: 0.2s;

  backdrop-filter: none;
  -webkit-backdrop-filter: none;

  img {
    width: 250px;
    border-radius: 10px 10px 0 0;
  }

  && :hover {
    scale: 1.01;
  }

  span {
    width: 250px;
    height: 230px;
    font-size: 14px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.3s, transform 0.3s;
  }

  && span:hover {
    opacity: 1;
    transform: translateY(0);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(3px);
  }
`;

export const Services = styled.div`

`
export const ServiceItem = styled.div`
cursor: pointer;
background-color: #ff0000;

`
