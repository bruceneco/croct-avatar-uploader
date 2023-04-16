import styled, {css, DefaultTheme} from "styled-components";
import {TextProps} from "./Text";

type WrapperProps = Pick<
  TextProps,
  "color" | "weight" | "textSize" | "variant"
>;
export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, color, variant, textSize, weight }) => css`
    display: flex;
    line-height: ${theme.sizes.lineHeight.main};
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xsm};
    color: ${theme.colors.text[color!]} !important;
    font-weight: ${weight} !important;
    font-size: ${theme.sizes.text[textSize!]};
    line-height: ${theme.sizes.lineHeight[textSize!]};

    & * {
      margin: 0;
    }

    & p {
      ${variant && variants[variant](theme)}
    }
  `}
`;
const variants = {
  clickable: (theme: DefaultTheme) => css`
    text-decoration: underline;
    cursor: pointer;
    font-weight: 500;
    color: ${theme.colors.text.highlight};
  `,
  text: (_: DefaultTheme) => css``,
};
