import { color } from "./var";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${color.background};
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
`;

export const Cloud = styled.img`
    background-image: url("img/vector.png");
    padding-left: 50px;


`
