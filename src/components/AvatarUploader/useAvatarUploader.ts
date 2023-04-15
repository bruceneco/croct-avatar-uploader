import {Ref, RefObject, useCallback, useEffect, useRef, useState} from "react";
import useDropFiles from "../../hooks/useDropFiles";
import useLoadImage from "../../hooks/useLoadImage";
import useRoundCropper from "../../hooks/useRoundCropper";

interface AvatarUploaderProps {
    onUpload: (url: string) => void;
}

interface AvatarUploaderHook {
    handleTryAgain: () => void,
    dragDrop: {
        dropRef: Ref<HTMLElement> | null, loadImageError?: Error,
    },
    cropper: {
        result?: string,
        imageURL?: string,
        initCropper: () => void,
        changeZoom: (arg0: number) => void,
        zoom: number,
        imageRef: RefObject<HTMLImageElement>
    },
    started: boolean,
    handleSave: () => void,

}

export default function useAvatarUploader({onUpload}: AvatarUploaderProps): AvatarUploaderHook {
    const [allowDrop, setAllowDrop] = useState<boolean>(true);
    const {dropRef, files, reset: resetFiles} = useDropFiles(allowDrop);

    const {
        imageURL,
        error: loadImageError,
        reset: resetLoadImage,
    } = useLoadImage(files[0]);
    const [result, setResult] = useState<string>();
    const imageRef = useRef<HTMLImageElement>(null);
    const {initCropper, changeZoom, zoom, getCrop} = useRoundCropper({imageRef})
    const handleSave = () => {
        const result = getCrop()
        if (result) {
            resetFiles()
            resetLoadImage()
            setResult(result)
            onUpload(result)
        }
    };

    useEffect(() => {
        setAllowDrop(files.length === 0);
    }, [files]);

    const handleTryAgain = useCallback(() => {
        setResult(undefined)
        resetLoadImage();
        resetFiles();
    }, []);

    const started = files.length !== 0;

    return {
        dragDrop: {
            dropRef,
            loadImageError
        },
        cropper: {
            initCropper,
            result,
            changeZoom,
            zoom,
            imageRef,
            imageURL,
        },
        handleSave,
        started,
        handleTryAgain,
    }

}