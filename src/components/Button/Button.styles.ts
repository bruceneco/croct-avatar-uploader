import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const Main = styled.button<Pick<ButtonProps, "variant">>`
  ${({ theme, variant }) => css`
    background: ${theme.colors.button[variant!]};
    color: ${theme.colors.text.white};
    border: none;
    border-radius: ${theme.sizes.radius.button};
    min-height: 3.2rem;
    min-width: 10.9rem;
    width: fit-content;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translate(-0.1rem, -0.1rem);
      box-shadow: 0.1rem 0.1rem 0.1rem #aaa;
    }

    &:active {
      transform: translate(0);
      box-shadow: none;
    }
  `}
`;
