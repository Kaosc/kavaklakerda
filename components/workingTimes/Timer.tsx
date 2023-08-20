"use client"

import { useEffect, useState } from "react"
import { CgSandClock } from "react-icons/cg"

export default function Timer({
	timer,
	isOpen,
}: {
	timer: { hours: number; min: number; sec: number }
	isOpen: boolean
}) {
	const [opacity, setOpacity] = useState("opacity-0")

	useEffect(() => {
		setTimeout(() => {
			setOpacity("opacity-100")
		}, 300)
	}, [timer])

	return (
		<div
			className={`flex flex-row justify-center items-center text-xl max-mobile:text-xs mt-1 transition-all ease-in-out ${opacity}`}
		>
			<CgSandClock className="mr-2 animate-pulse text-2xl max-mobile:text-xs" />
			{timer.hours < 10 ? "0" + timer.hours : timer.hours}:{timer.min < 10 ? "0" + timer.min : timer.min}:
			{timer.sec < 10 ? "0" + timer.sec : timer.sec} sonra {isOpen ? " kapanıyor" : " açılıyor"}
		</div>
	)
}
