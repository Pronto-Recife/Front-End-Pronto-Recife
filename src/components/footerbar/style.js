import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
    color: #fff;
    font-size: 14px;
    width: 100%;
    margin-top: 15%;


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const Social = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        color: #6AF670;
        cursor: pointer;
        transition: transform 0.3s ease, color 0.3s ease;
    }

    svg:hover {
        transform: scale(1.1);
        color: #fff;  
    }

    @media (max-width: 768px) {
        justify-content: center;
        margin-top: 10px;
        
        svg {
            margin: 0 5px;
        }
    }
`;
