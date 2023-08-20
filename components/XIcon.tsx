import React from "react"

export default function XIcon({
	size = "text-[30px]",
	mr = "mr-5",
	mt = "mt-5",
	style,
}: {
	size?: string
	mr?: string
	mt?: string
	style?: string
}) {
	return (
		<div
			className={
				`${size} ${mr} ${mt} hover:scale-110 ease-in-out transition-all duration-200 hover:text-[#30608d]` +
				" " +
				style
			}
		>
			𝕏
		</div>
	)
}
