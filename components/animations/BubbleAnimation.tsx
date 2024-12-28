"use client"

import { motion } from "framer-motion"
import { HTMLAttributes } from "react"

/**
 *
 * @param intensity set the intensity of the bubble count
 * @returns bubbles animation
 */
export default function BubbleAnimation({
	intensity = 20,
	h = "h-full",
}: {
	intensity?: number
	h?: HTMLAttributes<HTMLDivElement>["className"]
}) {
	const bubbles = Array.from({ length: intensity }) // Create 20 bubbles

	return (
		<div className={`w-full ${h} absolute overflow-hidden`}>
			{bubbles.map((_, index) => {
				const size = Math.random() * 30 + 10 // Random size between 10 and 40
				return (
					<motion.div
						key={index}
						initial={{
							y: "90vh",
							x: `${Math.random() * 100}vw`, // Random horizontal position
							scale: Math.random() * 0.6 + 0.4, // Random scale
							opacity: 0,
						}}
						animate={{
							y: "0vh", // Moves to the top
							opacity: [0, 0.8, 0], // Fades in and out
						}}
						transition={{
							duration: Math.random() * 5 + 3, // Random duration between 3 and 8 seconds
							repeat: Infinity, // Loops forever
							ease: "easeInOut",
						}}
						style={{
							position: "absolute",
							width: size,
							height: size,
							background: "rgba(173, 216, 230, 0.6)", // Light blue bubbles
							borderRadius: "50%", // Makes it a circle
							filter: "blur(2px)", // Adds a slight blur
						}}
					/>
				)
			})}
		</div>
	)
}
