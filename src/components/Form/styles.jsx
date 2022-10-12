import {
  border,
  text,
  borderLigth,
  borderError,
  borderButton,
} from "../../styles/var";
import styled, { css } from "styled-components";
import {  darken, lighten } from "polished";
import { Field } from "formik";



export const Container = styled.div`
  color: ${text};
  width: 30vw;
  height: 50%;
  margin: 10vh 5vw 0 15vh;

  @media screen and (max-width: 1024px) {
    margin: 10rem;
    max-width: 55rem;
  }

  @media screen and (max-width: 425px) {
    margin: 10rem;
  }
`;

export const Label = styled.label`
  display: inline-block;
  padding: 0.5rem 0;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Input = styled(Field)`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: 1px solid ${border};
  border-radius: 1rem;
  width: 30vw;
  margin-top: 0.8rem;
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid ${borderLigth};
      &:focus,
      &:active {
        border: 1px solid ${darken(0.1, (borderLigth))};
        box-shadow: ${borderLigth} 0px 0px 2px 1px;
        outline: none;
      }
    `}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${borderError};
      outline: none;
      &:focus,
      &:active {
        box-shadow: ${borderError} 0px 0px 2px 1px,
        border: 1px solid ${borderError};
        outline: none;
      }
    `}
    ${({ component }) =>
    component &&
    css`
      height: 20vh;
    `}
`;

export const StyledErrorMessage = styled.p`
  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #ff010c;
`;

export const Button = styled.button`
  font-size: 0.8rem;
  color: #FFFFFF;
  padding: 1.5rem 3rem;
  margin-top: 1.5rem;
  border: 1px solid ${darken(0.2, (borderButton))};
  border-radius: 50rem;
  background-color: ${borderButton};
  text-align: center;
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${darken(0.1, (borderButton))};
  }
  &:disabled {
    cursor: pointer;
    background-color: ${lighten(0.1, (borderButton))};
    box-shadow: none;
    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 55rem;
  height: 60rem;
  color: green;
  font-size: 5rem;
`;


