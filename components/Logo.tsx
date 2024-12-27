"use client"

import { useContext } from "react"

import Image from "next/image"
import Link from "next/link"

import { IsOpenContext } from "@/utils/contexts"
import { EASTER_DAY, EASTER_NIGHT } from "@/utils/constants"

export default function Logo() {
	const { isOpen } = useContext(IsOpenContext)

	return (
		<Link
			href={isOpen ? EASTER_DAY : EASTER_NIGHT}
			target="_blank"
			className="animate-pulse"
		>
			<Image
				className="max-mobile:h-36 mt-10 hover:scale-125 transition-all duration-1000 ease-in-out"
				src="/assets/logo.png"
				alt="logo"
				width={175}
				height={175}
				priority
			/>
		</Link>
	)
}
