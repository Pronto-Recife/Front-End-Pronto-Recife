import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    width: 100%;
    height: 100vh;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
    justify-content: center;
    align-items: center;
    padding: 20px;
    
`

export const FormSection = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: white;
    background-color: rgba(241, 241, 241, 0.3);
    padding: 27px 80px;
    row-gap: 5.0px;
    text-align: center;
    border-radius: 20px 0px 0px 20px;
    overflow: hidden;
    color: white;
    font-weight: bold;
    
    .containercheckbox{
        display: flex;
        gap: 5px;
        font-size: 12px;
    }
    @media screen and (max-width: 700px){
        border-radius: 20px;

        .logoM {
      display: flex;
        }

        .letra {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 10px;
      padding: 10px 0;
    }
    }
    
`
export const InfoSection = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(241, 241, 241, 0.8);
    padding: 30px 80px;
    row-gap: 20px;
    text-align: center;
    border-radius: 0px 20px 20px 0px;
    overflow: hidden;
    height: 34.4rem;

    .letra {
        color: #2B318A;
        font-weight: 700;
    }

    @media screen and (max-width: 700px) {
        display: none;

    }
`