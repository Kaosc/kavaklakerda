"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import { useState } from "react"
import GalleryPreview from "./GalleryPreview"

export default function Gallery({
	images,
	w,
	h,
	mx,
	my,
	justify,
}: {
	images: GImage[]
	w?: string
	h?: string
	mx: string
	my: string
	justify?: string
}) {
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
					images={images}
				/>
			)}
			<div className={"items-center flex flex-wrap h-full " + justify}>
				{images.map((img: GImage, index: number) => {
					return (
						<div
							key={index}
							className={
								"relative " +
								w +
								" " +
								h +
								" " +
								mx +
								" " +
								my +
								" hover:opacity-70 hover:scale-105 ease-in-out transition-all duration-200"
							}
						>
							{img?.title && (
								<h2 className="w-full text-white text-2xl font-bold p-2">
									{img.title}
								</h2>
							)}
							<div
								onClick={() => {
									setPreviewVisible(true)
									startIndex.current = index
								}}
								className="relative w-full h-full"
							>
								<Image
									key={index}
									alt="gallery"
									src={img.src + "media?size=l"}
									fill
									className="object-cover rounded-bl-2xl rounded-br-2xl"
								/>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
