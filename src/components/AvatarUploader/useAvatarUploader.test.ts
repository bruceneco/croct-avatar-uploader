import useAvatarUploader from './useAvatarUploader';
import {act, renderHook} from "@testing-library/react";

vi.mock('../../hooks/useDropFiles', () => ({
    __esModule: true,
    default: () => ({
        dropRef: {current: document.createElement('div')},
        files: [],
        reset: vi.fn(),
    })
}));

vi.mock('../../hooks/useLoadImage', () => ({
    __esModule: true,
    default: () => ({
        imageURL: 'mockImageUrl',
        error: null,
        reset: vi.fn(),
    })
}));

vi.mock('../../hooks/useRoundCropper', () => ({
    __esModule: true,
    default: () => ({
        initCropper: vi.fn(),
        changeZoom: vi.fn(),
        zoom: 1,
        getCrop: vi.fn(() => 'mockCrop'),
    })
}));

describe('useAvatarUploader', () => {
    const onUpload = vi.fn();

    it('should return initial values', () => {
        const {result} = renderHook(() => useAvatarUploader({onUpload}));

        expect(result.current.started).toBeFalsy();
        expect(result.current.dragDrop.loadImageError).toBeNull();
        expect(result.current.cropper.result).toBeUndefined();
        expect(result.current.cropper.imageURL).toBe('mockImageUrl');
        expect(result.current.cropper.zoom).toBe(1);
    });

    it('should call resetLoadImage and resetFiles when try again is clicked', () => {
        const {result} = renderHook(() => useAvatarUploader({onUpload}));

        act(() => {
            result.current.handleTryAgain();
        });

        expect(result.current.cropper.result).toBeUndefined();
        expect(result.current.cropper.imageURL).toBe('mockImageUrl');
    });

    it('should call onUpload when handleSave is clicked', () => {
        const {result} = renderHook(() => useAvatarUploader({onUpload}));

        act(() => {
            result.current.handleSave();
        });

        expect(onUpload).toHaveBeenCalledWith('mockCrop');
    });

    it('should call getCrop when handleSave is clicked', () => {
        const {result} = renderHook(() => useAvatarUploader({onUpload}));

        act(() => {
            result.current.handleSave();
        });

        expect(result.current.cropper.result).toBe('mockCrop');
    });
});
