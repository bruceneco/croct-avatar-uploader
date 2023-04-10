import * as S from "./Card.styles";
import { forwardRef, ReactNode } from "react";
import closeIcon from "../../assets/close.svg";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  as?: undefined;
  dotted?: boolean;
  onClose?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ onClose, children, dotted = false, ...rest }, ref) => {
    return (
      <S.Main ref={ref} dotted={dotted} {...rest}>
        {children}
        {onClose && (
          <S.CloseButton src={closeIcon} onClick={onClose} alt={"Close icon"} />
        )}
      </S.Main>
    );
  }
);

export default Card;
