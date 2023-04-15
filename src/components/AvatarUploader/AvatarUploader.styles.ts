import styled, {css} from "styled-components";
import Card from "../Card";
import Button from "../Button";

export const SizedCard = styled(Card)`
  ${({theme}) => css`
    display: flex;
    margin: ${theme.spacing.md};
    width: min(52.1rem, 50vw);
    height: 14.5rem;
    text-align: left;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing.l};
  `}
`;
export const Grid = styled.div`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 3fr 9fr;
    align-items: center;
    gap: ${theme.spacing.l};
  `}
`;

export const CropWrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsm};
    margin-right: ${theme.spacing.xl};
  `}
`;

export const RightAlignButton = styled(Button)`
  ${({theme}) => css`
    align-self: end;
    margin: ${theme.spacing.xsm} 0 -${theme.spacing.xsm} 0;
  `}
`;

