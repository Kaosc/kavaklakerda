"use client"
import { useLayoutEffect, useState } from "react"

export default function NavbarMargin() {
	const [margin, setMargin] = useState("0vh")

	const handlerScroll = () => {
		if (window.scrollY === 0) {
			setMargin("0vh")
		} else {
			setMargin("7vh")
		}
	}

	useLayoutEffect(() => {
		window.addEventListener("scroll", handlerScroll)
		return () => {
			window.removeEventListener("scroll", handlerScroll)
		}
	}, [])

	return (
		<div
			style={{
				marginTop: margin,
			}}
		></div>
	)
}
