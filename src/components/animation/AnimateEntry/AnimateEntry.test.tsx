import React from 'react'
import {act} from '@testing-library/react'
import AnimateEntry, {AnimateEntryProps} from './AnimateEntry'
import {customRender} from "../../../utils/testing/customRender";
import {useSpring} from "react-spring";
import {Mock} from "vitest";

vi.mock('react-spring', async () => {
    const actual: Object = await vi.importActual("react-spring");
    return {
        ...actual,
        useSpring: vi.fn(),
    }
})
const mockedUseSpring = useSpring as Mock

describe('AnimateEntry', () => {
    beforeEach(() => {
        mockedUseSpring.mockReturnValue({
            opacity: 0,
            y: -100,
            to: vi.fn(),
            delay: 0,
            config: {},
        })
    })

    it('should render correctly', () => {
        const props: AnimateEntryProps = {
            children: <div>hello world</div>,
        }
        const {getByText} = customRender(<AnimateEntry {...props} />)
        assert.exists(getByText('hello world'))
    })

    it('should call useSpring with correct values', () => {
        const props: AnimateEntryProps = {
            children: <div>hello world</div>,
            delay: 500,
            duration: 1000,
            opacityGradient: [0.5, 1],
            opacity: true,
            direction: 'bottomToTop',
            className: 'custom-class',
        }

        act(() => {
            customRender(<AnimateEntry {...props} />)
        })

        expect(mockedUseSpring).toHaveBeenCalledWith({
            from: {
                opacity: 0.5,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
            },
            delay: 500,
            config: {
                duration: 1000,
                easing: expect.any(Function),
            },
        })
    })
})
