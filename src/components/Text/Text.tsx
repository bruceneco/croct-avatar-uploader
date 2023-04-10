import { ReactNode } from "react";
import * as S from "./Text.styles";

export interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  content: string;
  variant?: "text" | "clickable";
  color?: "primary" | "secondary" | "highlight" | "danger";
  weight?: 200 | 300 | 400 | 500 | 600 | 700 | 800;
  startAdornment?: ReactNode;
  textSize?: "sm" | "md";
}

export default function Text({
  content,
  variant = "text",
  color = "primary",
  textSize = "sm",
  weight = 400,
  startAdornment,
  ...rest
}: TextProps) {
  return (
    <S.Wrapper
      data-testid={"text-wrapper"}
      textSize={textSize}
      color={color}
      weight={weight}
      variant={variant}
    >
      {startAdornment}
      <p {...rest}>{content}</p>
    </S.Wrapper>
  );
}
