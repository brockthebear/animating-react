import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'

const Modal = ({ animation, pointerEvents, closeModal }) => {
	return (
		<div className="modal" style={{ pointerEvents }}>
			<animated.div className="modal-card" style={animation}>
				<button onClick={closeModal}>Close Modal</button>
				<h1>Modal</h1>
			</animated.div>
		</div>
	)
}

const ModalWrapper = () => {
	const [on, toggle] = useState(false)
	const transition = useTransition(on, null, {
		from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
		leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
	})
	const pointerEvents = on ? 'all' : 'none'

	return (
		<div>
			{transition.map(
				({ item, key, props: transitionProps }) =>
					item && (
						<Modal
							key={key}
							animation={transitionProps}
							pointerEvents={pointerEvents}
							closeModal={() => toggle(false)}
						/>
					)
			)}
			<button onClick={() => toggle(!on)}>Open Modal</button>
		</div>
	)
}

export default ModalWrapper
