import * as S from "./SlideBar.styles";
import "react-rangeslider/lib/index.css";

interface SlideBarProps {
  onValueUpdate: (v: number) => void;
  value: number;
}

export default function SlideBar({ onValueUpdate, value = 50 }: SlideBarProps) {
  return (
    <S.InputSlider
      data-testid="slider"
      value={value}
      onChange={onValueUpdate}
      tooltip={false}
    />
  );
}
