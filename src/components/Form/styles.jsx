import { color } from "../../styles/var";
import styled, { css } from "styled-components";
import {  darken, lighten } from "polished";
import { Field } from "formik";



export const Container = styled.div`
  color: ${color.text};
  width: 30vw;
  height: 50%;
  margin: 12vh 5vw 5rem 15vh;

  @media (max-width: 1024px) {
    margin: 10rem 10rem 10rem 0;
    width: 30rem
  }

  @media (max-width: 425px) {
    margin: 10rem 5rem 10rem 15rem;
    width: 20rem;
  }
`;

export const Label = styled.label`
  display: inline-block;
  padding: 0.5rem 0;
  font-size: 2rem;
  margin-bottom: 1rem;

    @media (max-width: 425px) {
    width: 20rem;
  }

`;

export const Input = styled(Field)`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: 1px solid ${color.border};
  border-radius: 1rem;
  width: 100%;
  margin-top: 0.8rem;
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid ${color.borderLigth};
      &:focus,
      &:active {
        border: 1px solid ${darken(0.1, (color.borderLigth))};
        box-shadow: ${color.borderLigth} 0px 0px 2px 1px;
        outline: none;
      }
    `}
  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${color.borderError};
      outline: none;
      &:focus,
      &:active {
        box-shadow: ${color.borderError} 0px 0px 2px 1px,
        border: 1px solid ${color.borderError};
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
  color: ${color.wornigText};
`;

export const Button = styled.button`
  font-size: 0.8rem;
  color: ${color.buttonText};
  padding: 1.5rem 3rem;
  margin-top: 1rem;
  border: 1px solid ${darken(0.2, (color.borderButton))};
  border-radius: 50rem;
  background-color: ${color.borderButton};
  text-align: center;
  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${darken(0.1, (color.borderButton))};
  }
  &:disabled {
    cursor: pointer;
    background-color: ${lighten(0.1, (color.borderButton))};
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
  height: 30rem;
  color: ${color.send};
  font-size: 3rem;
`;


