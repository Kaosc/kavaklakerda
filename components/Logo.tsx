"use client"

import { useContext, useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { IsOpenContext } from "@/utils/contexts"
import { EASTER_DAY, EASTER_NIGHT } from "@/utils/constants"

export default function Logo() {
	const { isOpen } = useContext(IsOpenContext)
	const [href, setHref] = useState(EASTER_DAY)

	useEffect(() => {
		setHref(isOpen ? EASTER_DAY : EASTER_NIGHT)
	}, [isOpen])

	return (
		<Link
			href={href}
			target="_blank"
			className="animate-pulse"
		>
			<Image
				className="mb-2 max-mobile:h-36 mt-10 hover:scale-125 transition-all duration-1000 ease-in-out w-[250px] h-[250px] max-xl:w-[170px] max-xl:h-[170px]"
				src="/assets/logo.png"
				alt="logo"
				width={250}
				height={250}
				priority
			/>
		</Link>
	)
}
