import styled, { DefaultTheme } from "styled-components";

interface MainProps {
  dotted?: boolean;
}
export const Main = styled.div<MainProps>`
  ${({ theme, dotted }) => `
    padding: ${theme.spacing.xl};
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
