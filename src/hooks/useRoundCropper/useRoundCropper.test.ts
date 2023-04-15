import {act, renderHook} from "@testing-library/react";
import useRoundCropper from "./useRoundCropper";
import Cropper from "cropperjs";

const mockImageRef: React.RefObject<HTMLImageElement> = {
    current: document.createElement('img'),
};

vi.mock("../../utils/image/getRoundedCanvas", () => ({
    getRoundedCanvas: () => ({toDataURL: vi.fn().mockReturnValue("dataurl")})
}))
describe('UseRoundCropper', () => {
    it('should init cropper instance', () => {
        const {result} = renderHook((props) => useRoundCropper(props), {initialProps: {imageRef: mockImageRef}})
        act(() => result.current.initCropper());
        assert.instanceOf(result.current.cropper, Cropper);
    });
    it('should change zoom', () => {
        const {result} = renderHook((props) => useRoundCropper(props), {initialProps: {imageRef: mockImageRef}})
        act(() => result.current.changeZoom(2));
        assert.equal(result.current.zoom, 2)
    });
    it('should return a data url from canvas crop', () => {
        const {result} = renderHook((props) => useRoundCropper(props), {initialProps: {imageRef: mockImageRef}})
        let dataUrl: string | undefined;
        act(() => result.current.initCropper());
        act(() => dataUrl = result.current.getCrop())
        assert.exists(dataUrl)
    });
});