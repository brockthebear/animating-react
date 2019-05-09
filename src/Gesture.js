import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring, config } from 'react-spring'

const Gesture = () => {
	const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

	const bind = useGesture(values => {
		// set() can be used to set values (like setState) outside of the spring.
		// the spring will update with the new values in an animated way.
		let { down, delta } = values
		console.log(values)
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
				// opacity: xy.interpolate({ map: Math.abs, range: [0, 400], output: [1, 0] }),
				transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
			}}
		/>
	)
}

export default Gesture
