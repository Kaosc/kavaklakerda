"use client"

import { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

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
	console.log("isMobile", isMobile)
	const bubbles = Array.from({ length: isMobile ? 1 : intensity })

	return (
		<div className={`w-full ${h} absolute overflow-hidden`}>
			{bubbles.map((_, index) => {
				const size = Math.random() * 30 + 10
				return (
					<motion.div
						key={index}
						initial={{
							y: "90vh",
							x: `${Math.random() * 100}vw`,
							scale: Math.random() * 0.6 + 0.4,
							opacity: 0,
						}}
						animate={{
							y: "0vh",
							opacity: [0, 0.8, 0],
						}}
						transition={{
							duration: Math.random() * 5 + 3,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						style={{
							position: "absolute",
							width: size,
							height: size,
							background: "rgba(173, 216, 230, 0.6)",
							borderRadius: "50%",
							filter: "blur(2px)",
						}}
					/>
				)
			})}
		</div>
	)
}
