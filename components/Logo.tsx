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
	)
}
