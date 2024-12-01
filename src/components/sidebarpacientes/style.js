import styled from "styled-components";

export const Container = styled.aside`
    width: 220px;
    height: 100;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-right: 1px solid #ddd;
    margin: 0 1rem ;
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    img {
        width: 150px;
    }
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;

    h5 {
        margin-left: 1rem;
        color: #BCBCBC
    }
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: ${(props) => (props.active ? "600" : "600")};
    color: ${(props) => (props.active ? "#161B68" : "#161B68")};
    padding: 10px 15px;
    border-radius: 50px;
    background-color: ${(props) => (props.active ? "#6AF670" : "transparent")};
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: ${(props) =>
            props.active ? "#6AF670" : "rgba(0, 0, 0, 0.05)"};
    }

    img {
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }

    a {
        all: unset;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;

export const Icon = styled.div`
    display: none; 
`;

export const Divider = styled.hr`
    margin: 30px 0;
    border: none;
    border-top: 1px solid #ddd;
`;

export const General = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;


    h5 {
        margin-left: 1.125rem;
        color: #BCBCBC;
    }
`;


