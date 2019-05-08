import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring, config } from 'react-spring'

const Gesture = () => {
	const [{ x }, set] = useSpring(() => ({ x: 0 }))

	const bind = useGesture(values => {
		// set() can be used to set values (like setState) outside of the spring.
		// the spring will update with the new values in an animated way.
		let { down, delta } = values
		console.log(values)
		if (down) {
			set({
				x: down ? delta[0] : 0,
				config: config.wobbly,
			})
		}
	})

	return (
		<animated.div
			{...bind()}
			className="box"
			style={{
				opacity: x.interpolate({ map: Math.abs, range: [0, 400], output: [1, 0] }),
				transform: x.interpolate((x, y) => `translate3d(${x}px, 0, 0)`),
			}}
		/>
	)
}

export default Gesture
