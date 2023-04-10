import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.sizes.radius.avatar};
    background: ${theme.colors.background.fill};
    width: 11.3rem;
    height: 11.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  `}
`;

export const Logo = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  `}
`;
