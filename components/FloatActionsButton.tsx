import React from "react"
import Link from "next/link"
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"

import { MAP_URL, WHATSAPP_URL } from "@/utils/constants"

export default function FloatActionsButton() {
	const linkClass = "flex items-center p-3 max-mobile:p-2 hover:scale-105 hover:bg-cyan-600 rounded-full bg-[#30608d]"
	const iconClass = "text-3xl text-white max-mobile:text-2xl"

	return (
		<div className="fixed bottom-5 right-5 z-50 animate-pulse transition-all duration-200 ease-in-out">
			<Link
				href={MAP_URL}
				target="_blank"
				className={`${linkClass} mb-3`}
			>
				<FaMapMarkerAlt className={iconClass} />
			</Link>
			<Link
				href={WHATSAPP_URL}
				target="_blank"
				className={linkClass}
			>
				<FaWhatsapp className={iconClass} />
			</Link>
		</div>
	)
}
