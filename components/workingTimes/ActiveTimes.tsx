"use client"

import { useEffect, useMemo, useState } from "react"

import { CLOSE_HOURS, OPEN_HOURS } from "@/utils/constants"
import { AiOutlineClockCircle } from "react-icons/ai"
import dynamic from "next/dynamic"

const ActiveStatus = dynamic(() => import("@/components/workingTimes/ActiveStatus"), { ssr: false })

/*
  09:00 - 21:00 (opens every day)
  open now - close in hh:mm:ss
  close now - open in hh:mm:ss
*/

export default function ActiveTimes() {
	const [date, setCurrentDate] = useState(new Date())
	const [hour, min, sec] = useMemo(() => [date.getHours(), date.getMinutes(), date.getSeconds()], [date])

	const defaultTimerState = useMemo(() => {
		return {
			hours:
				hour === CLOSE_HOURS
					? 11
					: hour === 0
					? 9
					: hour > CLOSE_HOURS
					? 24 - hour + OPEN_HOURS
					: CLOSE_HOURS - hour,
			min: min === 0 ? 59 : min === 59 ? 0 : 59 - min,
			sec: sec === 0 ? 59 : sec === 59 ? 0 : 59 - sec,
		}
	}, [hour, min, sec])

	const [timer, setTimer] = useState(defaultTimerState)
	const [isOpen, setIsOpen] = useState(hour >= 9 && hour < 21 ? true : false)

	// Reset timer when time is up & change isOpen state
	useEffect(() => {
		if (timer.hours === 0 && timer.min === 0 && timer.sec === 0) {
			setIsOpen((prev) => !prev)
			setTimer(defaultTimerState)
			setCurrentDate(new Date())
		}
	}, [timer, defaultTimerState])

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prev) => {
				if (prev.sec > 0) {
					return { ...prev, sec: prev.sec - 1 }
				} else if (prev.min > 0) {
					return {
						...prev,
						sec: 59,
						min: prev.min - 1,
					}
				} else if (prev.hours > 0) {
					return {
						...prev,
						sec: 59,
						min: 59,
						hours: prev.hours - 1,
					}
				} else {
					return {
						...prev,
						sec: 0,
						min: 0,
						hours: 0,
					}
				}
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="w-full max-sm:text-2xl max-mobile:text-xl shadow-3xl shadow-black mt-5 text-3xl text-center">
			{/* WORKING HOURS */}
			<div className={`flex flex-col justify-center items-center mt-5`}>
				<div className="flex flex-row justify-center items-center">
					<p className="text-xl mr-3 max-mobile:text-xs">Her Gün</p>
					<AiOutlineClockCircle className="mr-3 text-2xl max-mobile:text-xs" />
					<p className="text-xl max-mobile:text-xs"> 09:00 - 21:00 </p>
				</div>
			</div>

			{/* TIMER & STATUS */}
			<ActiveStatus
				timer={timer}
				isOpen={isOpen}
			/>
		</div>
	)
}
