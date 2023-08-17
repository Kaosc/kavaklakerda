"use client"

import { useEffect, useState } from "react"
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
	const [fade, setFade] = useState({
		opacity: "opacity-0",
		duration: "duration-0",
	})

	useEffect(() => {
		setTimeout(() => {
			setFade({
				opacity: "opacity-100",
				duration: "duration-300",
			})
		}, 250)
	}, [currentImageIndex])

	const handleChange = (direction: string) => {
		setFade({
			opacity: "opacity-0",
			duration: "duration-0",
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
	}

	const ChangeImageButton = ({ dir }: { dir: string }) => {
		return (
			<button
				onClick={() => handleChange(dir)}
				className="text-6xl text-white m-4 rounded-xl p-1 hover:opacity-70 hover:scale-110"
			>
				{dir === "next" ? <FaArrowRight size={50} /> : <FaArrowLeft size={50} />}
			</button>
		)
	}

	return (
		<div className="fixed flex top-0 left-0 w-screen h-screen bg-[#000000e1] z-50 items-center justify-center">
			<div className="flex w-full h-full m-auto justify-center items-center p-10 max-md:flex-col max-md:p-0">
				{/* CLOSE BUTTON */}
				<div className="absolute top-0 right-0 z-30">
					<button
						type="button"
						onClick={() => setPreviewVisible(false)}
						className="text-6xl text-white m-4 rounded-xl p-1 hover:opacity-70 hover:scale-110"
					>
						<AiOutlineClose />
					</button>
				</div>

				{/* PREV BUTTON */}
				<div className="max-md:hidden">
					<ChangeImageButton dir={"prev"} />
				</div>

				{/* IMAGE */}
				<div className="relative h-full w-2/3 m-10 max-md:w-11/12">
					<Image
						alt="gallery"
						src={images[currentImageIndex].src + "media?size=l"}
						fill
						style={{
							objectFit: "contain",
						}}
						className={"transition-all ease-in-out " + fade.opacity + " " + fade.duration}
					/>
				</div>

				{/* NEXT BUTTON */}
				<div className="max-md:hidden">
					<ChangeImageButton dir={"next"} />
				</div>

				{/* MOBILE PREV/NEXT BUTTONS */}
				<div className="max-md:flex hidden absolute bottom-12">
					<ChangeImageButton dir={"prev"} />
					<ChangeImageButton dir={"next"} />
				</div>
			</div>
		</div>
	)
}
