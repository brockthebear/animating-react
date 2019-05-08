import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring, config } from 'react-spring'

const Gesture = () => {
	const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

	const bind = useGesture(({ down, delta }) => {
		// set() can be used to set values (like setState) outside of the spring.
		// the spring will update with the new values in an animated way.
		set({
			xy: down ? delta : [0, 0],
			config: config.wobbly,
		})
	})

	return (
		<animated.div
			{...bind()}
			className="box"
			style={{
				transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
			}}
		/>
	)
}

export default Gesture
