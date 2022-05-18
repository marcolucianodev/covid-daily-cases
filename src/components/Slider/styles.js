import styled from "styled-components";

export const Container = styled.div`
    width: 40%;

    .dates-range {
        cursor: pointer;
        width: 100%;
    }

    .position {
        position: relative;
    }

    .button {
        background-color: rgb(157, 150, 142); 
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        transition-duration: .6s
    }

    .button:hover {
        background-color: rgba(157, 150, 142, .6);
    }

`;