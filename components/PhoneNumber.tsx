"use client"

import { useState, useEffect } from "react"
import { Tooltip } from "@nextui-org/tooltip"

import { PHONE_NUMBER } from "@/utils/constants"

export default function PhoneNumber() {
	const [toolTipContent, setToolTipContent] = useState("Numarayı kopyalamak için tıkla")

	useEffect(() => {
		return () => setToolTipContent("Numarayı kopyalamak için tıkla")
	}, [])

	return (
		<Tooltip
			content={toolTipContent}
			placement="bottom"
			color="primary"
		>
			<div
				onClick={() => {
					navigator.clipboard.writeText(PHONE_NUMBER)
					setToolTipContent("Kopyalandı!")
				}}
			>
				<p className="text-3xl max-mobile:text-base max-sm:text-2xl max:sm:mb-5 text-center ml-4 px-3 hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100">
					{PHONE_NUMBER}
				</p>
			</div>
		</Tooltip>
	)
}
