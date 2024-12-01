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
    padding: 26px 80px;
    row-gap: 5.0px;
    border-radius: 20px 0px 0px 20px;
    overflow: hidden;
    color: white;
    font-weight: bold;

    .documentocontainer{
        width: 100%;
    }
    .documento {
      height: 39px;
      width: 90%;
      padding: 10px;
      font-size: 16px;
      border-radius: 8px  ;
      background-color: #DEE0FB;
      border: none;
      border-bottom: 5px solid #161B68;
      color: #161B68;
      margin-bottom: 10px;
    }

    .containercheckbox{
        display: flex;
        gap: 5px;
        font-size: 12px;
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
    height: 34.3rem;

    .letra {
        color: #2B318A;
        font-weight: 700;
    }
`
