import * as S from "./Card.styles";
import { ReactNode } from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  as?: undefined;
  dotted?: boolean;
}

export default function Card({ children, dotted = false, ...rest }: CardProps) {
  return (
    <S.Main dotted={dotted} {...rest}>
      {children}
    </S.Main>
  );
}
