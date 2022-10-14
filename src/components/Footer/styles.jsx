import { color } from "../../styles/var";
import styled from "styled-components";

export const Footers = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: $footer-color;
    height: 15vh;
    border: 1px solid $border;
`;

export const Pink = styled.div`
    width: 24%;
    height: 100%;
    & img {
        width: 11rem;
        float: right;
    }
`;

export const Social = styled.div`
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    & a {
     display: block;
     color: ${color.icon};
     margin-left: 1.5rem;
}`;

export const Sidebar = styled.div`
    height: 100%;
    display: flex;
    & img:nth-child(1) {
        width: 4rem;
        height: 6rem;
        margin-right: 4rem;
    }
    & img:nth-child(1) {

    }
`;


