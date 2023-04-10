import * as S from "./LogoPreview.styles";
import attention from "../../../../assets/attention.svg";

interface LogoPreviewProps {
  invalid?: boolean;
  src?: string;
}

export default function LogoPreview({
  invalid = false,
  src,
}: LogoPreviewProps) {
  return (
    <S.Wrapper>
      {invalid && <img src={attention} alt="Warning icon" />}
      {!invalid && <S.Logo src={src} alt="Logo preview from user" />}
    </S.Wrapper>
  );
}
