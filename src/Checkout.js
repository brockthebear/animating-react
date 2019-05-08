import React, { useState } from 'react'
import { animated, useSpring, config } from 'react-spring'

const Checkout = ({ isOpen }) => {
	const { x } = useSpring({
		x: isOpen ? 0 : 100,
		config: {
			// a full list of react-sprint configs can be found at https://www.react-spring.io/docs/hooks/api
			...config.default, // config.[wobbly,gentle,stiff,molasses,slow]
		},
	})

	return (
		<div className="checkout" style={{ pointerEvents: isOpen ? 'all' : 'none' }}>
			<animated.div
				style={{
					transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`),
				}}
				className="checkout-left"
			/>
			<animated.div
				style={{
					transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`),
				}}
				className="checkout-right"
			/>
		</div>
	)
}

export default Checkout
