import * as S from "./DropInstructions.styles";
import Text from "../../../Text";
import picture from "../../../../assets/picture.svg";

export default function DropInstructions() {
  return (
    <S.Wrapper>
      <Text
        content={"Organization Logo"}
        startAdornment={
          <S.PictureImg
            src={picture}
            alt="Image of a picture black and white"
          />
        }
        weight={500}
      />
      <Text
        content={"Drop the image here or click to browse."}
        color={"secondary"}
        weight={400}
      />
    </S.Wrapper>
  );
}
