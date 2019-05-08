import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

// const Toggle = () => {
// 	const [isToggled, setToggle] = useState(false)
// 	// useTransition is useful for things like a transition or anything that wants
// 	// to mount after the page has been rendered.
// 	// the 1st arg (`isToggled`) determines whether or not the transition is rendered.
// 	const transition = useTransition(isToggled, null, {
// 		from: {
// 			opacity: 0,
// 			position: 'absolute',
// 			width: '100%',
// 			display: 'flex',
// 			alignItems: 'center',
// 			justifyContent: 'center',
// 		},
// 		enter: { opacity: 1 },
// 		leave: { opacity: 0 },
// 	})

// 	return (
// 		<div style={{ position: 'relative' }}>
// 			{transition.map(({ item, key, props }) =>
// 				item ? (
// 					<animated.h1 style={props}>Hello</animated.h1>
// 				) : (
// 					<animated.h1 style={props}>World</animated.h1>
// 				)
// 			)}
// 			<button onClick={() => setToggle(!isToggled)}>Toggle</button>
// 		</div>
// 	)
// }

const Toggle = () => {
	const [items, setItems] = useState([
		{
			letter: 'B',
			key: 1,
		},
		{
			letter: 'r',
			key: 2,
		},
		{
			letter: 'o',
			key: 3,
		},
		{
			letter: 'c',
			key: 4,
		},
		{
			letter: 'k',
			key: 5,
		},
	])

	const transition = useTransition(items, item => item.key, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})

	return (
		<div style={{ position: 'relative' }}>
			{transition.map(({ item, key, props }) => (
				<animated.h1 style={props} key={key}>
					{item.letter}
				</animated.h1>
			))}
			<button
				onClick={() =>
					setItems([
						{
							letter: 'B',
							key: 1,
						},
					])
				}
			>
				Toggle
			</button>
		</div>
	)
}

export default Toggle
