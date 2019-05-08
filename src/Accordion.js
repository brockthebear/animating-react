import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import useMeasure from './useMeasure'

const Accordion = () => {
	const [on, toggle] = useState(false)
	const [bind, { height, top }] = useMeasure()

	const animation = useSpring({
		overflow: 'hidden',
		height: !on ? 0 : height + top * 2, // (top * 2) to account for padding-top *and* padding-bottom
	})

	return (
		<div>
			<h1>
				<button onClick={() => toggle(!on)}>Toggle</button>
			</h1>
			<animated.div style={animation}>
				<div className="accordion" {...bind}>
					<p>Hello, I am the accordion.</p>
				</div>
			</animated.div>
		</div>
	)
}

export default Accordion
