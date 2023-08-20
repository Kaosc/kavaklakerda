import { MAP_URL, WHATSAPP_URL } from "@/utils/constants"
import Link from "next/link"
import React from "react"
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"

export default function FloatActionsButton() {
	return (
		<div className="fixed bottom-5 right-5 z-50  animate-pulse  transition-all duration-200 ease-in-out">
			<Link
				href={MAP_URL}
				target="_blank"
				className="flex items-center justify-center p-3 hover:scale-105 hover:bg-cyan-600 rounded-full bg-[#30608d] mb-3"
			>
				<FaMapMarkerAlt className="text-3xl text-white" />
			</Link>
			<Link
				href={WHATSAPP_URL}
				target="_blank"
				className="flex items-center justify-center p-3 hover:scale-105 hover:bg-cyan-600 rounded-full bg-[#30608d]"
			>
				<FaWhatsapp className="text-3xl text-white" />
			</Link>
		</div>
	)
}
