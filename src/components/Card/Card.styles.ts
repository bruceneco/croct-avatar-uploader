import styled, { css, DefaultTheme } from "styled-components";

interface MainProps {
  dotted?: boolean;
}
export const Main = styled.div<MainProps>`
  ${({ theme, dotted }) => css`
    padding: ${theme.spacing.xl};
    position: relative;
    background: ${theme.colors.background.secondary};
    border-radius: ${theme.sizes.radius.section};
    ${dotted && modifiers.dottedOutline(theme)}
  `}
`;

const modifiers = {
  dottedOutline: (
    theme: DefaultTheme
  ) => `outline: ${theme.sizes.border} ${theme.colors.border.main} dashed;
`,
};

export const CloseButton = styled.img`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: ${theme.spacing.md};
    right: ${theme.spacing.md};
    width: 1.25rem;
    height: 1.25rem;
  `}
`;
