import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const Toggle = () => {
	const [isToggled, setToggle] = useState(false)
	// useTransition is useful for things like a transition or anything that wants
	// to mount after the page has been rendered.
	const transition = useTransition(isToggled, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})

	return (
		<div>
			{transition.map(
				({ item, key, props }) =>
					item && (
						<animated.h1 key={key} style={props}>
							Hello
						</animated.h1>
					)
			)}
			<button onClick={() => setToggle(!isToggled)}>Toggle</button>
		</div>
	)
}

export default Toggle
