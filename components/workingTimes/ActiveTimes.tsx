"use client"

import { useEffect, useMemo, useState, useContext, useCallback } from "react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { CgSandClock } from "react-icons/cg"

import { CLOSING_HOURS, OPENING_HOURS } from "@/utils/constants"
import { IsOpenContext } from "@/utils/contexts"

export default function ActiveTimes() {
	const { isOpen, setIsOpen } = useContext<IsOpenContext>(IsOpenContext)

	const [date, setCurrentDate] = useState(new Date())
	const [timeStatus, setTimeStatus] = useState("")

	const [hour, min, sec] = useMemo(() => [date.getHours(), date.getMinutes(), date.getSeconds()], [date])

	const defaultTimerState = useMemo(() => {
		let res = { hours: 0, min: 0, sec: 0 }

		if (hour >= OPENING_HOURS && hour < CLOSING_HOURS) {
			res.hours = CLOSING_HOURS - hour - 1
			res.min = 60 - min - 1
			res.sec = 60 - sec
		} else if (hour < OPENING_HOURS) {
			res.hours = OPENING_HOURS - hour - 1
			res.min = 60 - min - 1
			res.sec = 60 - sec
		} else if (hour >= CLOSING_HOURS) {
			res.hours = 24 - hour + OPENING_HOURS - 1
			res.min = 60 - min - 1
			res.sec = 60 - sec
		}

		return res
	}, [hour, min, sec])

	const [timer, setTimer] = useState(defaultTimerState)

	useEffect(() => {
		updateTimerStatus()
	}, [timer.hours])

	// Reset timer when time is up & change isOpen state
	useEffect(() => {
		if (timer.hours === 0 && timer.min === 0 && timer.sec === 0) {
			setIsOpen((prev: boolean) => !prev)
			setTimer(defaultTimerState)
			setCurrentDate(new Date())
			updateTimerStatus()
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

	const updateTimerStatus = useCallback(() => {
		let res = ""

		if (isOpen) {
			if (timer.hours === 0 && timer.min < 10) {
				res = "birazdan kapanacak"
			} else if (timer.hours === 0) {
				res = `${timer.min} dakika sonra kapanıyor`
			} else {
				const estimatedHour = timer.min > 30 ? timer.hours + 1 : timer.hours
				res = `${estimatedHour} saat sonra kapanıyor`
			}
		} else {
			if (timer.hours === 0 && timer.min < 10) {
				res = "birazdan açılacak"
			} else if (timer.hours === 0) {
				res = `${timer.min} dakika sonra açılıyor`
			} else {
				const estimatedHour = timer.min > 30 ? timer.hours + 1 : timer.hours
				res = `${estimatedHour} saat sonra açılıyor`
			}
		}

		setTimeStatus(res)
	}, [isOpen, timer])

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
			<div className={`flex flex-row justify-center items-center mt-2 font-extralight`}>
				<p className="text-xl mr-3 max-mobile:text-xs">Her Gün</p>
				<AiOutlineClockCircle className="mr-3 text-2xl max-mobile:text-xs" />
				<p className="text-xl max-mobile:text-xs"> 09:00 - 21:00 </p>
			</div>
		</div>
	)
}
