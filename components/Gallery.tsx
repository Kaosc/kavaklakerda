"use client"

import Image from "next/image"
import React from "react"
import { useState } from "react"

const images = [
	"https://www.instagram.com/p/CimbWlbLnHd/media?size=l",
	"https://www.instagram.com/p/Cimdk7mLdD1/media?size=l",
	"https://www.instagram.com/p/CimbjpsLZKS/media?size=l",
	// "https://www.instagram.com/p/Cg6-fTJsGxw/media?size=l",
	// "https://www.instagram.com/p/CGXYCBxAT1i/media?size=l",
	// "https://www.instagram.com/p/CimeJx_rUOQ/media?size=l",
	// "https://www.instagram.com/p/CeYQ2VPLLOl/media?size=l",
	// "https://www.instagram.com/p/Cg68eBLseE1/media?size=l",
	// "https://www.instagram.com/p/CtTSCyorsRb/media?size=l",
]

export default function Gallery() {
	const [showSlideshow, setShowSlideshow] = useState(false)
	return (
		<div className="items-center justify-around flex flex-wrap  h-full">
			{images.map((image, index) => {
				return (
					<div
						key={index}
						className="h-[400px] my-10 mx-10"
					>
						<Image
							key={index}
							alt="gallery"
							src={image}
							width={550}
							height={500}
							style={{
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
				)
			})}
		</div>
	)
}
