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
	className,
}: {
	images: GImage[]
	w?: string
	h?: string
	mx: string
	my: string
	justify?: string
	className?: React.HTMLAttributes<HTMLDivElement>["className"]
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
			<div className={"items-center flex flex-wrap h-full " + justify + " " + className}>
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
								" hover:saturate-150 brightness-105 hover:scale-105 ease-in-out transition-all duration-200"
							}
						>
							{/* TITLE */}
							{img?.title && <h2 className="w-full text-white text-2xl font-bold p-2">{img.title}</h2>}

							{/* IMAGE */}
							<div
								onClick={() => {
									setPreviewVisible(true)
									startIndex.current = index
								}}
								className="relative w-full h-full"
							>
								{img?.w && img?.h ? (
									<Image
										key={index}
										alt="gallery"
										src={img.src}
										width={img.w}
										height={img.h}
										className="shadow-[#000000af] object-cover rounded-3xl shadow-xl ease-in-out transition-all duration-200 hover:shadow-[#588299b9]"
									/>
								) : (
									<Image
										key={index}
										alt="gallery"
										src={img.src}
										fill
										className="object-cover rounded-3xl shadow-xl ease-in-out transition-all duration-200 hover:shadow-[#588299b9]"
									/>
								)}

								{/* STOCK  */}
								{img?.stock !== undefined && (
									<div
										className={`absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-2xl ${
											img.stock ? "bg-[#149c4b]" : "bg-[#c53535]"
										}`}
									>
										<h2 className={`font-bold text-black text-base p-[10px] tracking-wider animate-pulse`}>
											{img.stock ? "STOKTA VAR" : "STOKTA YOK"}
										</h2>
									</div>
								)}
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
