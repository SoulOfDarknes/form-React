import { color } from "../../styles/var";
import styled from "styled-components";

export const Footers = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${color.footer};
    border-top: 1px solid ${color.footerBorder};
`;

export const Pink = styled.div`
    margin-left: 4rem;
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
    background-color: ${color.footer};

    & a {
     display: block;
     color: ${color.icon};
     margin-left: 1.5rem;
}`;

export const Sidebar = styled.div`
    display: flex;

    @media (max-width: 425px) {
    background-color: ${color.footer};
    border-top: 1px solid ${color.footerBorder};
    }

    & img:nth-child(1) {
        width: 4rem;
        height: 5rem;
        margin-right: 4rem;
    }
    & img:nth-child(2) {
        padding-top: 1.5rem;
        width: 5rem;
        height: 6rem;
    }`;


