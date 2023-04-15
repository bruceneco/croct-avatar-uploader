import {Ref} from "react";
import * as S from "./AvatarUploader.styles";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LogoPreview from "./components/LogoPreview";
import DropInstructions from "./components/DropInstructions";
import SlideBar from "../SlideBar";
import Text from "../Text";
import 'cropperjs/dist/cropper.css';
import useAvatarUploader from "./useAvatarUploader";


interface AvatarUploaderProps {
    onUpload: (url: string) => void;
}

export default function AvatarUploader({onUpload}: AvatarUploaderProps) {
    const {
        dragDrop,
        started,
        handleTryAgain,
        cropper,
        handleSave,
        inputImageRef
    } = useAvatarUploader({onUpload})
    const steps = {
        "drop": !started && !cropper.result,
        "error": dragDrop.loadImageError,
        "crop": cropper.imageURL,
        "result": cropper.result && !cropper.imageURL
    }
    return (
        <S.SizedCard
            ref={dragDrop.dropRef as Ref<HTMLDivElement>}
            onClose={started ? handleTryAgain : undefined}
            onClick={() => dragDrop.allowDrop && inputImageRef?.current?.click()}
            dotted
        >
            {steps.drop && (<>
                <DropInstructions
                    data-testid={"drop-instructions"}/>
            </>)}
            {steps.error && (
                <S.Grid>
                    <LogoPreview invalid/>
                    <ErrorMessage
                        message={dragDrop.loadImageError!.message}
                        onTryAgain={handleTryAgain}
                    />
                </S.Grid>
            )}
            {steps.crop && (
                <S.Grid>
                    <LogoPreview
                        src={cropper.imageURL}
                        imageRef={cropper.imageRef}
                        onLoad={cropper.initCropper}
                    />
                    <S.CropWrapper>
                        <Text content={"Crop"} color={"secondary"} textSize={"md"}/>
                        <SlideBar
                            min={.1}
                            max={3}
                            onValueUpdate={cropper.changeZoom}
                            value={cropper.zoom}
                            step={.1}
                        />
                        <S.RightAlignButton onClick={handleSave}>Save</S.RightAlignButton>
                    </S.CropWrapper>
                </S.Grid>
            )}
            {steps.result && (
                <S.Grid>
                    <LogoPreview src={cropper.result}/>
                    <DropInstructions/>
                </S.Grid>
            )}
            <input hidden ref={inputImageRef} type="file" accept={dragDrop.accept.join(",")}/>
        </S.SizedCard>
    );
}
