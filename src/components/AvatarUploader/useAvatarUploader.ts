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
        dropRef: Ref<HTMLElement> | null, loadImageError?: Error, allowDrop: boolean, accept: string[]
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
    inputImageRef: RefObject<HTMLInputElement> | null
}

export default function useAvatarUploader({onUpload}: AvatarUploaderProps): AvatarUploaderHook {
    const [allowDrop, setAllowDrop] = useState<boolean>(true);
    const {dropRef, files, reset: resetFiles, changeFiles} = useDropFiles(allowDrop);
    const accept = ["image/jpeg", "image/png", "image/gif"]
    const {
        imageURL,
        error: loadImageError,
        reset: resetLoadImage,
    } = useLoadImage(files[0], accept);
    const [result, setResult] = useState<string>();
    const imageRef = useRef<HTMLImageElement>(null);
    const inputImageRef = useRef<HTMLInputElement>(null);
    const {initCropper, changeZoom, zoom, getCrop, resetZoom} = useRoundCropper({imageRef})
    const handleSave = () => {
        const result = getCrop()
        if (result) {
            resetFiles()
            resetLoadImage()
            resetZoom()
            setResult(result)
            onUpload(result)
        }
    };

    useEffect(() => {
        setAllowDrop(files.length === 0);
    }, [files]);

    useEffect(() => {
        if (inputImageRef.current !== null) {
            const update = () => {
                if (inputImageRef.current?.files)
                    changeFiles(Array.from(inputImageRef.current.files))
            }
            inputImageRef.current.addEventListener("change", () => update())
            inputImageRef.current.removeEventListener("change", () => update())

        }
    }, [inputImageRef.current]);

    const handleTryAgain = useCallback(() => {
        setResult(undefined)
        resetLoadImage();
        resetFiles();
        resetZoom();
    }, []);

    const started = files.length !== 0;

    return {
        dragDrop: {
            dropRef,
            loadImageError,
            allowDrop,
            accept
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
        inputImageRef
    }

}