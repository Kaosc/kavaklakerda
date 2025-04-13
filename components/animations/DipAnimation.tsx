"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

export default function DipAnimation() {
	const fishCount = Math.min(isMobile ? 1 : 6, 10) // Limit to 10 fish
	const grassCount = Math.min(isMobile ? 10 : 40, 50) // Limit to 50 grass elements

	const [randomValues, setRandomValues] = useState<{
		fishArray: { size: number; y: number; scale: number; duration: number }[]
		grassArray: { height: number; marginLeft: number; duration: number }[]
	}>({ fishArray: [], grassArray: [] })

	useEffect(() => {
		// Generate random values only on the client side
		const fishArray = Array.from({ length: fishCount }).map(() => ({
			size: Math.random() * 40 + 20,
			y: Math.random() * 200,
			scale: Math.random() * 0.6 + 0.8,
			duration: Math.random() * 10 + 5,
		}))

		const grassArray = Array.from({ length: grassCount }).map(() => ({
			height: Math.random() * 60 + 30,
			marginLeft: Math.random() * 4,
			duration: Math.random() * 2 + 2,
		}))

		setRandomValues({ fishArray, grassArray })
	}, [fishCount, grassCount])

	return (
		<div className="absolute w-full h-[300px] overflow-hidden">
			{/* Grass Animation */}
			<div className="absolute bottom-0 w-full h-[100px] flex items-end justify-center">
				{randomValues.grassArray.map((grass, index) => (
					<motion.div
						key={index + "grass"}
						initial={{ rotate: -5 }}
						animate={{ rotate: [5, -5, 5] }}
						transition={{
							duration: grass.duration,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="bg-green-500/80 w-1 rounded-t-full"
						style={{
							marginLeft: `${grass.marginLeft}vw`,
							height: `${grass.height}px`,
						}}
					/>
				))}
			</div>

			{/* Fish Animation */}
			{randomValues.fishArray.map((fish, index) => (
				<motion.div
					key={index + "fish"}
					initial={{
						x: "-10vw",
						y: `${fish.y}px`,
						scale: fish.scale,
					}}
					animate={{
						x: "110vw",
					}}
					transition={{
						duration: fish.duration,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute bg-sky-900 rounded-full flex items-center justify-center"
					style={{
						width: fish.size,
						height: fish.size / 2,
						borderRadius: "50%",
					}}
				>
					{/* Fish Eye */}
					<div
						className="absolute bg-white rounded-full"
						style={{
							width: fish.size / 6,
							height: fish.size / 6,
							top: "30%",
							left: "70%",
						}}
					/>
				</motion.div>
			))}
		</div>
	)
}
