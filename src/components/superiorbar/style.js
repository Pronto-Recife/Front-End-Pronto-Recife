import styled from 'styled-components';

export const BarContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px 20px;
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
    
    
    @media (max-width: 768px) {
        padding: 10px 15px;
    }
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin-right: 20px;
    gap: 20px;
    color: #030F41;
    font-weight: 500;

    @media (max-width: 768px) {
        display: none; 
    }
`;

export const NavItem = styled.li`
    margin: 0 10px;
    font-size: 14px;
    color: #030F41;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: #f1f1f1;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    width: 250px;

    svg {
        width: 20px;
        height: 20px;
        color: #030F41;
        margin-right: 8px;
    }

    @media (max-width: 768px) {
        width: 180px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 5px 8px;
    }
`;

export const SearchInput = styled.input`
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    font-size: 14px;
    color: var(--text-color);

    ::placeholder {
        color: #030F41;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
        color: #030F41;
    }

    @media (max-width: 768px) {
        margin-left: 10px;
    }
`;

export const AccountWrapper = styled(IconWrapper)`
    svg {
        margin-right: 8px;
    }
`;

export const ToggleWrapper = styled(IconWrapper)`
    svg {
        margin-right: 8px;
    }
`;

export const Text = styled.p`
    font-size: 14px;
    color: #030F41;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
