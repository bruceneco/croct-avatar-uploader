import * as S from "./SlideBar.styles";
import "react-rangeslider/lib/index.css";
import {SliderProps} from "react-rangeslider";

interface SlideBarProps extends SliderProps {
  onValueUpdate: (v: number) => void;
  value: number;
}

export default function SlideBar({
                                   onValueUpdate,
                                   value = 50,
                                   ...rest
                                 }: SlideBarProps) {
  return (
      <S.InputSlider
          {...rest}
          data-testid="slider"
          value={value}
          onChange={onValueUpdate}
          tooltip={false}
      />
  );
}
