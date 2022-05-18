import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;

    .header-text {
        position: relative;
        padding: 8px;
        transition: .8s;
    }

    .header-text::after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #ddd;
        transition: width 2s ease 0s, left 2s ease 0s;
        width: 0;
    }

    .header-text:hover::after {
        width: 100%;
        left: 0;
    }

    .header-description {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-description2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -10px;
}
`;