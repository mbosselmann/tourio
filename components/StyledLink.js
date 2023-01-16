import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  background-color: lightsalmon;
  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;

  ${({ variant }) =>
    variant === "fixed" &&
    css`
      position: fixed;
      bottom: 50px;
      left: 70%;
    `}

  ${({ variant }) =>
    variant === "alignSelf" &&
    css`
      justify-self: start;
    `}

    ${({ variant }) =>
    variant === "outlined" &&
    css`
      text-align: center;
      background-color: white;
      border: 3px solid lightsalmon;
    `}
`;
