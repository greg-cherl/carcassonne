import { useEffect, useState } from 'react'

export const useScroll = (containerRef: React.RefObject<HTMLDivElement>) => {
	const [delta, setDelta] = useState(0)

	const handleWheel = (event: React.WheelEvent) => {
		setDelta(Math.sign(event.deltaY))
	}

	useEffect(() => {
		const container = containerRef.current
		if (container && delta !== 0) {
			container.scrollBy({
				top: delta * window.innerHeight,
				behavior: 'smooth',
			})
			setDelta(0)
		}
	}, [delta, containerRef])

	return { handleWheel }
}
