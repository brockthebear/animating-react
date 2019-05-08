import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function useMeasure() {
	const ref = useRef()
	const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
	const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect))) // contentRect is the rectangle of the thing that we are measuring.
	// useEffect watches for when the item changes and it disconnect from an item on cleanup.
	useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
	return [{ ref }, bounds]
}
