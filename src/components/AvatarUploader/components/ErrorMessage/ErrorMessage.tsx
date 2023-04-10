import Text from "../../../Text";
import * as S from "./ErrorMessage.styles";

interface ErrorMessageProps {
  message: string;
  onTryAgain: () => void;
}

export default function ErrorMessage({
  message,
  onTryAgain,
}: ErrorMessageProps) {
  return (
    <S.Wrapper>
      <Text content={message} color={"danger"} textSize={"md"} />
      <Text
        content={"Try again"}
        variant={"clickable"}
        onClick={onTryAgain}
        textSize={"md"}
      />
    </S.Wrapper>
  );
}
