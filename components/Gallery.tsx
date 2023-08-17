"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import { useState } from "react"
import { galleryImages } from "@/utils/constants"
import GalleryPreview from "./GalleryPreview"

export default function Gallery() {
	const [previewVisible, setPreviewVisible] = useState(false)
	const startIndex = useRef(0)

	// Hide scrollbar when preview is visible
	useEffect(() => {
		document.body.style.overflow = previewVisible ? "hidden" : "auto"
	}, [previewVisible])

	return (
		<>
			{previewVisible && (
				<GalleryPreview
					setPreviewVisible={setPreviewVisible}
					startIndex={startIndex.current}
				/>
			)}
			<div className="items-center justify-around flex flex-wrap h-full">
				{galleryImages.map((image, index) => {
					return (
						<div
							key={index}
							className="h-[400px] my-10 mx-10"
							onClick={() => {
								setPreviewVisible(true)
								startIndex.current = index
							}}
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
								className="hover:opacity-70 hover:scale-105 rounded-xl ease-in-out transition-all duration-200"
							/>
						</div>
					)
				})}
			</div>
		</>
	)
}
