"use client"

import { useContext } from "react"

import { EASTER_DAY, EASTER_NIGHT } from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { IsOpenContext } from "@/utils/contexts"

export default function Logo() {
	const { isOpen } = useContext(IsOpenContext)

	return (
		<>
			<Link
				href={isOpen ? EASTER_DAY : EASTER_NIGHT}
				target="_blank"
			>
				<Image
					className="max-mobile:h-36 mt-10 animate-pulse hover:scale-110 ease-in-out transition-all duration-200"
					src="/assets/logo.png"
					alt="logo"
					width={150}
					height={150}
					priority
				/>
			</Link>
			<button
				onClick={() => {
					console.log("clicked")
					localStorage.setItem("isOpen", JSON.stringify(!isOpen))
				}}
			>
				TEST
			</button>
		</>
	)
}
