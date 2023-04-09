import { ReactNode, useMemo } from "react";
import * as S from "./Text.styles";

export interface TextProps {
  content: string;
  variant?: "text";
  color?: "primary" | "secondary";
  weight?: 200 | 300 | 400 | 500 | 600 | 700 | 800;
  startAdornment?: ReactNode;
}

export default function Text({
  content,
  variant = "text",
  color = "primary",
  weight = 400,
  startAdornment,
}: TextProps) {
  const typography = useMemo(() => {
    switch (variant) {
      default:
        return <p>{content}</p>;
    }
  }, [content, variant]);

  return (
    <S.Wrapper data-testid={"text-wrapper"} color={color} weight={weight}>
      {startAdornment}
      {typography}
    </S.Wrapper>
  );
}
