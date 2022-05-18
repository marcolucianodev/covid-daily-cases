import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    width: 700px;
    margin: 0;

    tr, td, th {
        border: 1px solid black !important;
}

    th {
        font-weight:bold;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    table {
        width: 100%;
        border-collapse: collapse !important;
    }

    .loading {
        position:absolute;
        margin: 80px 120px;
        zoom: 110%;
    }
`;