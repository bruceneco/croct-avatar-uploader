import * as S from "./Card.styles";
import { forwardRef, ReactNode } from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  as?: undefined;
  dotted?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, dotted = false, ...rest }, ref) => {
    return (
      <S.Main ref={ref} dotted={dotted} {...rest}>
        {children}
      </S.Main>
    );
  }
);

export default Card;
