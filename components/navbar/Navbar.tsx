"use client"

import { useLayoutEffect, useState } from "react"

import useScrollDirection from "@/hooks/useScrollDirection"

export default function Navbar() {
	const [reachTop, setReachTop] = useState(true)
	const scrollDirection = useScrollDirection()

	const handlerScroll = () => {
		if (window.scrollY === 0) setReachTop(true)
		else setReachTop(false)
	}

	useLayoutEffect(() => {
		window.addEventListener("scroll", handlerScroll)
		return () => {
			window.removeEventListener("scroll", handlerScroll)
			setReachTop(false)
		}
	}, [])

	const LinkClass = "text-lg max-lg:text-sm hover:opacity-50 transition-all duration-300 ease-in-out"

	return (
		<div
			className="absolute w-full top-0 z-20 transition-all duration-300 bg-[#0000003d] backdrop-blur-sm"
			style={{
				position: reachTop ? "relative" : "fixed",
				transform: scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
			}}
		>
			<div className="flex h-screen-10 self-center items-center justify-evenly shadow-xl h-[7vh]">
				<a
					href="#home"
					className={LinkClass}
				>
					ANA SAYFA
				</a>
				<a
					href="#products"
					className={LinkClass}
				>
					ÜRÜNLER
				</a>
				<a
					href="#where"
					className={LinkClass}
				>
					NEREDE
				</a>
			</div>
		</div>
	)
}
