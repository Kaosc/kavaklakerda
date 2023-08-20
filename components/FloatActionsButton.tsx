import { WHATSAPP_URL } from "@/utils/constants"
import Link from "next/link"
import React from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function FloatActionsButton() {
	return (
		<div className="fixed bottom-5 right-5 z-50 rounded-full animate-pulse hover:scale-105 bg-[#30608d] hover:bg-cyan-600 transition-all duration-200 ease-in-out">
			<Link
				href={WHATSAPP_URL}
				target="_blank"
				className="flex items-center justify-center p-3"
			>
				<FaWhatsapp className="text-3xl text-white" />
			</Link>
		</div>
	)
}
