import styled, { css } from "styled-components";
import Slider from "react-rangeslider";

export const InputSlider = styled(Slider)`
  ${({ theme }) => css`
    height: 2px !important;
    background: ${theme.colors.bar.secondary} !important;
    margin: ${theme.spacing.xsm} 0 !important;
    ${reset};

    .rangeslider {
      &__fill {
        background: ${theme.colors.bar.primary} !important;
        ${reset};
        height: 0.2rem !important;
      }

      &__handle {
        background: ${theme.colors.bar.primary} !important;
        border: none !important;
        height: 1.2rem !important;
        width: 1.2rem !important;
        ${reset}
      }
    }
  `}
`;
const reset = css`
  border: none !important;
  box-shadow: none !important;

  &::after {
    display: none;
  }
`;
