import {animated, easings, useSpring} from 'react-spring'

export interface AnimateEntryProps {
    delay?: number
    duration?: number
    opacity?: boolean
    opacityGradient?: [number, number]
    direction?: 'topToBottom' | 'bottomToTop' | 'leftToRight' | 'rightToLeft'
    className?: string,
    children: React.ReactElement | React.ReactElement[]
}

const directionPresets = {
    topToBottom: {from: {y: -100}, to: {y: 0}},
    bottomToTop: {from: {y: 100}, to: {y: 0}},
    leftToRight: {from: {x: -100}, to: {x: 0}},
    rightToLeft: {from: {x: 100}, to: {x: 0}}
}
const AnimateEntry: React.FC<AnimateEntryProps> = ({
                                                       children,
                                                       delay = 200,
                                                       duration = 400,
                                                       opacityGradient = [0, 1],
                                                       opacity = true,
                                                       direction = 'topToBottom',
                                                       className
                                                   }) => {
    const animationStyles = useSpring({
        from: {
            opacity: opacity ? opacityGradient[0] : 1,
            ...directionPresets[direction].from
        },
        to: {
            opacity: opacity ? opacityGradient[1] : 1,
            ...directionPresets[direction].to
        },
        delay,
        config: {duration, easing: easings.easeOutBack}
    })
    return (
        <animated.div className={className} style={animationStyles}>
            {children}
        </animated.div>
    )
}
export default AnimateEntry