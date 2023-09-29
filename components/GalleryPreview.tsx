"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"

import { AiOutlineClose } from "react-icons/ai"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

export default function GalleryPreview({
	images,
	setPreviewVisible,
	startIndex,
}: {
	images: GImage[]
	setPreviewVisible: React.Dispatch<React.SetStateAction<boolean>>
	startIndex: number
}) {
	const [currentImageIndex, setCurrentImageIndex] = useState(startIndex)
	const [fade, setFade] = useState({ opacity: "0", duration: "0" })

	const handleChange = useCallback(
		(direction: string) => {
			setFade({
				opacity: "0",
				duration: "0",
			})

			if (direction === "next") {
				if (currentImageIndex >= images.length - 1) {
					setCurrentImageIndex(0)
				} else {
					setCurrentImageIndex((prev) => prev + 1)
				}
			}

			if (direction === "prev") {
				if (currentImageIndex === 0) {
					setCurrentImageIndex(images.length - 1)
				} else {
					setCurrentImageIndex((prev) => prev - 1)
				}
			}
		},
		[currentImageIndex, images]
	)

	const keyDownAction = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape" || e.key === "Q" || e.key === "q") setPreviewVisible(false)
			if (e.key === "ArrowRight" || e.key === "D" || e.key === "d") handleChange("next")
			if (e.key === "ArrowLeft" || e.key === "A" || e.key === "a") handleChange("prev")
		},
		[handleChange, setPreviewVisible]
	)

	useEffect(() => {
		addEventListener("keydown", keyDownAction)
		return () => removeEventListener("keydown", keyDownAction)
	}, [keyDownAction])

	useEffect(() => {
		setTimeout(() => {
			setFade({
				opacity: "100",
				duration: "300",
			})
		}, 200)
	}, [currentImageIndex])

	const ChangeImageButton = ({ direction }: { direction: string }) => {
		return (
			<button
				onClick={() => handleChange(direction)}
				className="text-6xl m-4 rounded-xl p-1 hover:opacity-70 hover:scale-110 text-[#0096C7]"
			>
				{direction === "next" ? <FaArrowRight size={50} /> : <FaArrowLeft size={50} />}
			</button>
		)
	}

	const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) setPreviewVisible(false)
	}

	return (
		<div
			className="fixed flex top-0 left-0 w-screen h-screen bg-[#000000e1] z-20 items-center justify-center"
			onClick={handleOutsideClick}
		>
			<div className="flex w-full h-full m-auto justify-center items-center p-10 max-md:flex-col max-md:p-0">
				{/* CLOSE BUTTON */}
				<div className="absolute top-0 right-0 z-30">
					<button
						type="button"
						onClick={() => setPreviewVisible(false)}
						className="text-6xl text-[#0096C7] m-4 rounded-xl p-1 hover:opacity-70 hover:scale-110"
					>
						<AiOutlineClose />
					</button>
				</div>

				{/* PREV BUTTON */}
				<div className="max-md:hidden">
					<ChangeImageButton direction={"prev"} />
				</div>

				{/* IMAGE */}
				<div className="relative h-full w-2/3 m-10 max-md:w-11/12 max-md:bottom-12">
					<Image
						alt="gallery"
						src={images[currentImageIndex].src + "media?size=l"}
						fill
						className={`object-contain ease-in-out duration-${fade.duration === "0" ? "0" : "300"} opacity-${
							fade.opacity
						}`}
					/>
				</div>

				{/* NEXT BUTTON */}
				<div className="max-md:hidden">
					<ChangeImageButton direction={"next"} />
				</div>

				{/* MOBILE PREV/NEXT BUTTONS */}
				<div className="max-md:flex hidden absolute bottom-12">
					<ChangeImageButton direction={"prev"} />
					<ChangeImageButton direction={"next"} />
				</div>
			</div>
		</div>
	)
}
