import * as S from "./LogoPreview.styles";
import attention from "../../../../assets/attention.svg";
import {Ref} from "react";

interface LogoPreviewProps {
    invalid?: boolean;
    src?: string;
    zoom?: number;
    imageRef?: Ref<any>;
    onLoad?: () => void;
}

export default function LogoPreview({
                                        invalid = false,
                                        src,
                                        imageRef,
                                        onLoad
                                    }: LogoPreviewProps) {
    return (
        <S.Wrapper>
            {invalid && <img src={attention} alt="Warning icon"/>}
            {!invalid && (
                <img
                    onLoad={onLoad}
                    src={src}
                    ref={imageRef}
                    alt="Logo preview from user"
                />
            )}
        </S.Wrapper>
    );
}
