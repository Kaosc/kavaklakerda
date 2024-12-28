"use client"

import { motion } from "framer-motion"

export default function DipAnimation() {
	// Fish and grass arrays
	const fishArray = Array.from({ length: 6 }) // 6 fish
	const grassArray = Array.from({ length: 35 }) // 20 grass blades

	return (
		<div className="absolute w-full h-[300px] overflow-hidden">
			{/* Grass Animation */}
			<div className="absolute bottom-0 w-full h-[100px] flex items-end justify-center">
				{grassArray.map((_, index) => (
					<motion.div
						key={index}
						initial={{ rotate: -5 }}
						animate={{ rotate: [5, -5, 5] }} // Swaying effect
						transition={{
							duration: Math.random() * 2 + 2, // Random speed
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="bg-green-500/80 w-1 rounded-t-full"
						style={{
							marginLeft: `${Math.random() * 4}vw`, // Random spacing
							height: `${Math.random() * 60 + 40}px`, // Random height
						}}
					/>
				))}
			</div>

			{/* Fish Animation */}
			{fishArray.map((_, index) => {
				const size = Math.random() * 40 + 20 // Random fish size

				return (
					<motion.div
						key={index}
						initial={{
							x: "-10vw",
							y: `${Math.random() * 200}px`, // Random height within the 300px container
							scale: Math.random() * 0.6 + 0.8, // Random scale
						}}
						animate={{
							x: "110vw", // Swim to the right
						}}
						transition={{
							duration: Math.random() * 10 + 5, // Random speed
							repeat: Infinity,
							ease: "linear",
						}}
						className="absolute bg-sky-900 rounded-full flex items-center justify-center"
						style={{
							width: size,
							height: size / 2,
							borderRadius: "50%",
						}}
					>
						{/* Fish Eye */}
						<div
							className="absolute bg-white rounded-full"
							style={{
								width: size / 6,
								height: size / 6,
								top: "30%",
								left: "70%",
							}}
						/>
					</motion.div>
				)
			})}
		</div>
	)
}
