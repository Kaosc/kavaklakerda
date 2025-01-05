"use client"

import { useEffect, useState, useContext, useCallback } from "react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { CgSandClock } from "react-icons/cg"

import { CLOSING_HOURS, OPENING_HOURS } from "@/utils/constants"
import { IsOpenContext } from "@/utils/contexts"

export default function ActiveTimes() {
	const { isOpen, setIsOpen } = useContext(IsOpenContext)
	const [timeStatus, setTimeStatus] = useState("")
	const [hydrated, setHydrated] = useState(false)

	useEffect(() => {
		setHydrated(true)
	}, [])

	useEffect(() => {
		if (!hydrated) return

		updateTimerStatus(isOpen)

		const interval = setInterval(() => {
			const date = new Date()
			const hours = date.getHours()
			const currentIsOpen = hours >= OPENING_HOURS && hours < CLOSING_HOURS

			if (currentIsOpen !== isOpen) {
				setIsOpen(currentIsOpen)
			}

			updateTimerStatus(currentIsOpen)
		}, 60000)

		return () => clearInterval(interval)
	}, [hydrated])

	const updateTimerStatus = useCallback(
		(isOpen: boolean) => {
			let res = ""

			// Get the current time
			const date = new Date()
			let { hours, min, sec } = {
				hours: date.getHours(),
				min: date.getMinutes(),
				sec: date.getSeconds(),
			}

			// Calculate the remaining time
			if (hours >= OPENING_HOURS && hours < CLOSING_HOURS) {
				hours = CLOSING_HOURS - hours - 1
				min = 60 - min - 1
				sec = 60 - sec
			} else if (hours < OPENING_HOURS) {
				hours = OPENING_HOURS - hours - 1
				min = 60 - min - 1
				sec = 60 - sec
			} else if (hours >= CLOSING_HOURS) {
				hours = 24 - hours + OPENING_HOURS - 1
				min = 60 - min - 1
				sec = 60 - sec
			}

			// Set the store status
			if (isOpen) {
				if (hours === 0 && min < 10) {
					res = "birazdan kapanacak"
				} else if (hours === 0) {
					res = `${min} dakika sonra kapanıyor`
				} else {
					const estimatedHour = min > 30 ? hours + 1 : hours
					res = `${estimatedHour} saat sonra kapanıyor`
				}
			} else {
				if (hours === 0 && min < 10) {
					res = "birazdan açılacak"
				} else if (hours === 0) {
					res = `${min} dakika sonra açılıyor`
				} else {
					const estimatedHour = min > 30 ? hours + 1 : hours
					res = `${estimatedHour} saat sonra açılıyor`
				}
			}

			setTimeStatus(res)
		},
		[isOpen]
	)

	const WorkingHours = useCallback(
		() => (
			<div className={`flex flex-row justify-center items-center mt-2 font-extralight`}>
				<p className="text-xl mr-3 max-mobile:text-xs">Her Gün</p>
				<AiOutlineClockCircle className="mr-3 text-2xl max-mobile:text-xs" />
				<p className="text-xl max-mobile:text-xs"> 09:00 - 21:00 </p>
			</div>
		),
		[]
	)

	// Render only after hydration
	if (!hydrated) return null

	return (
		<div className="shadow-3xl shadow-black text-center">
			{/* STORE STATUS */}
			<div
				className={`flex flex-col items-end max-xl:items-center transition-all ease-in-out animate-in fade-in-0 duration-1000 font-extralight`}
			>
				<div className="flex justify-center items-center">
					<div className={`mt-4 py-3 px-4 rounded-xl ${isOpen ? "bg-[#4a48c4]" : "bg-red-500"}`}>
						<p className="text-3xl font-bold animate-pulse">{isOpen ? "AÇIK" : "KAPALI"}</p>
					</div>
				</div>
				<div className={`flex flex-row justify-center items-center text-xl max-mobile:text-xs mt-4 font-extralight`}>
					{timeStatus ? (
						<p className="transition-all ease-in-out animate-in fade-in-0 mr-2 duration-1000">{timeStatus}</p>
					) : (
						<></>
					)}
					<CgSandClock
						className={`text-2xl max-mobile:text-xs text-[26px] my-1 mb-[1px] ${timeStatus ? "animate-pulse" : "animate-spin"} `}
					/>
				</div>
			</div>

			{/* WORKING HOURS */}
			<WorkingHours />
		</div>
	)
}
