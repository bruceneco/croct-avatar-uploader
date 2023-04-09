import styled, { css } from "styled-components";
import { TextProps } from "./Text";

type WrapperProps = Pick<TextProps, "color" | "weight">;
export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, color, weight }) => css`
    display: flex;
    line-height: ${theme.sizes.lineHeight.main};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xsm};
    color: ${theme.colors.text[color!]};
    font-weight: ${weight};
    font-size: ${theme.sizes.text.sm};
  `}
`;
