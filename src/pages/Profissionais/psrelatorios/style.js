import styled from "styled-components";

export const Container= styled.div`
    display: flex;

    .content {
        display: flex;
        justify-content: center;
        padding: 50px;
        flex-direction: column;
        background-color: #EAEBFC;
        border: 3px solid #161B68;
        border-radius: 10px;
        width: 100%;
        font-size: 12px;
        color: #161B68;
    }

    .title {
        text-align: center;
    }

    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    .header-content {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        background-color: #DEE0FF;
        border-radius: 40px;
        -webkit-box-shadow: 10px 11px 11px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 11px 11px -10px rgba(0,0,0,0.75);
        box-shadow: 10px 11px 11px -10px rgba(0,0,0,0.75);
    }

    .box {
        width: 100%;
        padding: 20px;
        background-color: transparent;
        border: none;
        outline: none;
        
    }

    .submain {
        width: 50%;
        display: flex;
        align-items: end;
        flex-direction: column;
        row-gap: 20px;
    }

    .searchbutton {
        background-color: transparent;
        border: none;
        padding: 15px;

    }

    .text-context {
        padding: 0 80px;
    }

    .footer {
        display: flex;
        align-items: end;
        flex-direction: column;

    }

`