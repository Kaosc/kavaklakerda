"use client"

import { useLayoutEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaGithub, FaArrowLeft } from "react-icons/fa"

import ScrollButton from "../ScrollButton"
import useScrollDirection from "@/hooks/useScrollDirection"

export default function Navbar() {
	const scrollDirection = useScrollDirection()
	const pathname = usePathname()

	const [reachTop, setReachTop] = useState(true)

	const handlerScroll = () => {
		if (window.scrollY === 0) {
			setReachTop(true)
		} else {
			setReachTop(false)
		}
	}

	useLayoutEffect(() => {
		window.addEventListener("scroll", handlerScroll)
		return () => {
			window.removeEventListener("scroll", handlerScroll)
			setReachTop(false)
		}
	}, [])

	return (
		<div
			className="fixed w-full top-0 z-10 transition-all duration-300 bg-[#0000003d] backdrop-blur-sm"
			style={{
				position: reachTop ? "static" : "fixed",
				transform: scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
			}}
		>
			<div className="flex h-screen-10 self-center items-center justify-evenly shadow-xl h-[7vh]">
				{pathname !== "/contact" && (
					<Link
						href="/contact"
						className="text-lg max-lg:text-sm hover:opacity-50"
					>
						İLETİŞİM
					</Link>
				)}
				<a
					href="#where"
					className="text-lg max-lg:text-sm hover:opacity-50"
				>
					NEREDE
				</a>
				<ScrollButton>
					<p className="text-md max-lg:text-sm hover:opacity-50">ÜRÜNLER</p>
				</ScrollButton>
			</div>
		</div>
	)
}
