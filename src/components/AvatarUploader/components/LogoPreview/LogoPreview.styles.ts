import styled, {css} from "styled-components";

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

    & > * {
      position: absolute;
    }

    & > img {
      max-width: 100%;
    }

    .cropper-view-box,
    .cropper-face {

      border-radius: 50%;

    }

    .cropper-view-box {
      position: absolute;
      outline: 0;
      box-shadow: none;

    }
  `}
`;
