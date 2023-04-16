import useAvatarUploader from './useAvatarUploader';
import {act, renderHook} from "@testing-library/react";

const resetLoadImage = vi.fn();
const resetDropFiles = vi.fn();
const resetZoom = vi.fn();
vi.mock('../../hooks/useDropFiles', () => ({
    __esModule: true,
    default: () => ({
        dropRef: {current: document.createElement('div')},
        files: [],
        reset: resetDropFiles,
    })
}));

vi.mock('../../hooks/useLoadImage', () => ({
    __esModule: true,
    default: () => ({
        imageURL: 'mockImageUrl',
        error: null,
        reset: resetLoadImage,
    })
}));

vi.mock('../../hooks/useRoundCropper', () => ({
    __esModule: true,
    default: () => ({
        initCropper: vi.fn(),
        changeZoom: vi.fn(),
        zoom: 1,
        resetZoom: resetZoom,
        getCrop: vi.fn(() => 'mockCrop'),
    })
}));

describe('useAvatarUploader', () => {
    const onUpload = vi.fn();
    beforeEach(() => {
        vi.resetAllMocks()
    });

    it('should return initial values', () => {
        const {result} = renderHook(() => useAvatarUploader({onUpload}));

        expect(result.current.started).toBeFalsy();
        expect(result.current.dragDrop.loadImageError).toBeNull();
        expect(result.current.cropper.result).toBeUndefined();
        expect(result.current.cropper.imageURL).toBe('mockImageUrl');
        expect(result.current.cropper.zoom).toBe(1);
    });

    it('should reset values on try again', () => {
        const {result} = renderHook(() => useAvatarUploader({onUpload}));

        act(() => {
            result.current.handleTryAgain();
        });

        expect(resetZoom).toHaveBeenCalledOnce()
        expect(resetDropFiles).toHaveBeenCalledOnce()
        expect(resetLoadImage).toHaveBeenCalledOnce()
    });
    it('should reset values on save', () => {
        const {result} = renderHook(() => useAvatarUploader({onUpload}));

        act(() => {
            result.current.handleSave();
        });

        expect(resetZoom).toHaveBeenCalledOnce()
        expect(resetDropFiles).toHaveBeenCalledOnce()
        expect(resetLoadImage).toHaveBeenCalledOnce()
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
