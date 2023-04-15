import {RefObject, useCallback, useState} from "react";
import Cropper from "cropperjs";
import {convertRemToPixels} from "../../utils/conversion/convertRemToPixels";
import {getRoundedCanvas} from "../../utils/image/getRoundedCanvas";

interface CropperHook {
    imageRef: RefObject<HTMLImageElement>
}

export default function useRoundCropper({imageRef}: CropperHook) {
    const [cropper, setCropper] = useState<Cropper>();
    const [zoom, setZoom] = useState<number>(1);

    const initCropper = useCallback(() => {
        const size = convertRemToPixels(11.3)
        if (imageRef.current)
            setCropper(new Cropper(imageRef.current, {
                aspectRatio: 1,
                viewMode: 1,
                dragMode: "move",
                autoCrop: true,
                background: false,
                movable: true,
                zoomable: false,
                guides: false,
                cropBoxResizable: false,
                cropBoxMovable: false,
                highlight: false,
                center: false,
                minCropBoxHeight: size,
                minCropBoxWidth: size,
            }));
    }, [imageRef.current])

    const changeZoom = useCallback((zoom: number) => {
        setZoom(zoom)
        cropper?.scale(zoom)
    }, [cropper]);

    const getCrop = useCallback(() => {
        const croppedCanvas = cropper?.getCroppedCanvas();
        const roundedCanvas = getRoundedCanvas(croppedCanvas);
        return roundedCanvas?.toDataURL();
    }, [cropper]);

    return {
        initCropper, changeZoom, zoom, getCrop, cropper
    }
}

