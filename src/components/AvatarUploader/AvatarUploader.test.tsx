import AvatarUploader from './AvatarUploader';
import useAvatarUploader from './useAvatarUploader';
import {Mock} from "vitest";
import {customRender} from "../../utils/testing/customRender";

vi.mock('./useAvatarUploader');

describe('AvatarUploader', () => {
    it('renders drop instructions on initial render', () => {
        const mockedUseAvatarUploader = useAvatarUploader as Mock;
        mockedUseAvatarUploader.mockReturnValue({
            dragDrop: {dropRef: {current: null}, loadImageError: undefined},
            started: false,
            handleTryAgain: vi.fn(),
            cropper: {result: undefined, imageURL: undefined},
            handleSave: vi.fn(),
        });
        const {getByTestId} = customRender(<AvatarUploader onUpload={vi.fn()}/>);
        assert.exists(getByTestId('drop-instructions'));
    });

    it('renders error message when there is an error loading the image', () => {
        const mockedUseAvatarUploader = useAvatarUploader as Mock;
        mockedUseAvatarUploader.mockReturnValue({
            dragDrop: {dropRef: {current: null}, loadImageError: new Error('Error loading image')},
            started: false,
            handleTryAgain: vi.fn(),
            cropper: {result: undefined, imageURL: undefined},
            handleSave: vi.fn(),
        });
        const {getByText} = customRender(<AvatarUploader onUpload={vi.fn()}/>);
        assert.exists(getByText('Error loading image'));
    });

    it('renders image with crop options when an image is loaded', () => {
        const mockedUseAvatarUploader = useAvatarUploader as Mock;
        mockedUseAvatarUploader.mockReturnValue({
            dragDrop: {dropRef: {current: null}, loadImageError: undefined},
            started: true,
            handleTryAgain: vi.fn(),
            cropper: {result: undefined, imageURL: 'https://example.com/image.jpg'},
            handleSave: vi.fn(),
        });
        const {getByText} = customRender(<AvatarUploader onUpload={vi.fn()}/>);
        assert.exists(getByText('Save'));
    });

    it('renders image with download instructions after saving', async () => {
        const mockedUseAvatarUploader = useAvatarUploader as Mock;
        mockedUseAvatarUploader.mockReturnValue({
            dragDrop: {dropRef: {current: null}, loadImageError: undefined},
            started: true,
            handleTryAgain: vi.fn(),
            cropper: {result: 'https://example.com/cropped-image.jpg', imageURL: undefined},
            handleSave: vi.fn(),
        });
        const onUpload = vi.fn();
        const {getByTestId, getByAltText} = customRender(<AvatarUploader onUpload={onUpload}/>);

        assert.exists(getByTestId('drop-instructions'));
        assert.exists(getByAltText('Logo preview from user'));
    });
});
