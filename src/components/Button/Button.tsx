import * as S from "./Button.styles";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
}

export default function Button({ variant = "primary", ...rest }: ButtonProps) {
  return <S.Main variant={variant} {...rest} />;
}
