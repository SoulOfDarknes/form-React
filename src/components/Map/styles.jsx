import styled from "styled-components";

export const Maps = styled.div`
margin-left: 5rem;

      @media  (max-width: 1024px) {
    display: none;
  }
`;

export const Image = styled.div`
    
        & img:nth-child(1) {
        position: absolute;
        width: 5rem;
        height: 5rem;
        margin-right: 4rem;
        position: absolute;
        top: 55%;
        z-index: 2;
    }
        & img:nth-child(2) {
        position: absolute;
        width: 12rem;
        height: 12rem;
        margin-right: 4rem;
        position: absolute;
        top: 60%;
        z-index: 1;
        animation: 3s ease 1s normal infinite running rot;
        @keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
    }
`