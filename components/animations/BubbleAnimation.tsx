"use client"

import { HTMLAttributes, memo, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

/**
 *
 * @param intensity set the intensity of the bubble count
 * @returns bubbles animation
 */
function BubbleAnimation({
	intensity = 20,
	h = "h-full",
}: {
	intensity?: number
	h?: HTMLAttributes<HTMLDivElement>["className"]
}) {
	const bubbleCount = isMobile ? 1 : intensity

	const [bubbles, setBubbles] = useState<{ size: number; x: number; scale: number; duration: number }[]>([])

	useEffect(() => {
		setBubbles(
			Array.from({ length: bubbleCount }).map(() => ({
				size: Math.random() * 30 + 10,
				x: Math.random() * 100,
				scale: Math.random() * 0.6 + 0.4,
				duration: Math.random() * 5 + 3,
			}))
		)
	}, [])

	return (
		<div className={`w-full ${h} absolute overflow-hidden`}>
			{bubbles.map((bubble, index) => (
				<motion.div
					key={index + "bubble"}
					initial={{
						y: "90vh",
						x: `${bubble.x}vw`,
						scale: bubble.scale,
						opacity: 0,
					}}
					animate={{
						y: "0vh",
						opacity: [0, 0.8, 0],
					}}
					transition={{
						duration: bubble.duration,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					style={{
						position: "absolute",
						width: bubble.size,
						height: bubble.size,
						background: "rgba(173, 216, 230, 0.6)",
						borderRadius: "50%",
						filter: "blur(2px)",
					}}
				/>
			))}
		</div>
	)
}

export default memo(BubbleAnimation)
