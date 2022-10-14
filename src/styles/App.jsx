import { color } from "./var";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${color.background};
    height: 90vh;
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
`
