"use client"

import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"

export default function DipAnimation() {
	const fishArray = Array.from({ length: isMobile ? 1 : 6 })
	const grassArray = Array.from({ length: isMobile ? 10 : 35 })

	return (
		<div className="absolute w-full h-[300px] overflow-hidden">
			{/* Grass Animation */}
			<div className="absolute bottom-0 w-full h-[100px] flex items-end justify-center">
				{grassArray.map((_, index) => (
					<motion.div
						key={index}
						initial={{ rotate: -5 }}
						animate={{ rotate: [5, -5, 5] }}
						transition={{
							duration: Math.random() * 2 + 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="bg-green-500/80 w-1 rounded-t-full"
						style={{
							marginLeft: `${Math.random() * 4}vw`,
							height: `${Math.random() * 60 + 40}px`,
						}}
					/>
				))}
			</div>

			{/* Fish Animation */}
			{fishArray.map((_, index) => {
				const size = Math.random() * 40 + 20

				return (
					<motion.div
						key={index}
						initial={{
							x: "-10vw",
							y: `${Math.random() * 200}px`,
							scale: Math.random() * 0.6 + 0.8,
						}}
						animate={{
							x: "110vw",
						}}
						transition={{
							duration: Math.random() * 10 + 5,
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
