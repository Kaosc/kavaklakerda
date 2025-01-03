"use client"

import "swiper/css"
import "./sliderStyles.css"

import { useRef, useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

import { galleryImages } from "@/data/images"
import GalleryPreview from "@/components/GalleryPreview"

const SliderGallery = () => {
	const [previewVisible, setPreviewVisible] = useState(false)
	const startIndex = useRef(0)
	const swiperRef = useRef<SwiperRef | null>(null)

	const goToNextSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext()
		}
	}
	const goToPrevSlide = () => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev()
		}
	}

	const SlideButton = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => (
		<button
			onClick={onClick}
			className="w-32 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 border-0 dark:border border-white/12 hover:border-white/20 focus:outline-none relative group"
			type="button"
		>
			{direction === "left" ? (
				<BsArrowLeft className="text-white text-2xl group-hover:text-blue-500 transition-colors duration-300" />
			) : (
				<BsArrowRight className="text-white text-2xl group-hover:text-blue-500 transition-colors duration-300" />
			)}

			{/* Optional After Element for Hover Effect */}
			<span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full transition-all duration-300"></span>
		</button>
	)

	return (
		<>
			{previewVisible && (
				<GalleryPreview
					setPreviewVisible={setPreviewVisible}
					startIndex={startIndex.current}
					images={galleryImages}
				/>
			)}
			<div className="w-[85%] mx-auto mt-10 mb-5">
				{/* Container */}
				<Swiper
					ref={swiperRef}
					initialSlide={1}
					spaceBetween={70}
					centeredSlides={true}
					loop={true}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 2,
							spaceBetween: 50,
						},
						1536: {
							slidesPerView: 3,
						},
						1920: {
							slidesPerView: 3,
						},
					}}
					style={{
						borderRadius: "1rem",
					}}
				>
					{galleryImages.map((img, index) => (
						<SwiperSlide key={index}>
							<img
								onClick={() => {
									setPreviewVisible(true)
									startIndex.current = index
								}}
								src={img.lcl}
								alt="gallery"
								className="h-[550px] w-full object-cover rounded-2xl max-sm:h-[350px] max-md:h-[450px] cursor-pointer"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="flex justify-around w-[15%] mt-10 max-xl:w-[50%] max-sm:w-full z-10">
				<SlideButton
					direction="left"
					onClick={goToPrevSlide}
				/>
				<SlideButton
					direction="right"
					onClick={goToNextSlide}
				/>
			</div>
		</>
	)
}

export default SliderGallery
