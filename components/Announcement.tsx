"use client"

import { useEffect, useState } from "react"

import { FiAlertTriangle } from "react-icons/fi"
import { IoMdCloseCircleOutline } from "react-icons/io"

export default function Announcement() {
	const [show, setShow] = useState("flex")
	const [message, setMessage] = useState("")

	useEffect(() => {
		// do not touch it. navigator language is not working on server side
		if (navigator.language === "tr") {
			setMessage(
				"Bu web sitesindeki bilgiler doğru olmayabilir. Daha fazla bilgi için lütfen mağaza sahibiyle iletişime geçin."
			)
		} else {
			setMessage(
				"Informations in this website are may or may not be accurate. Please contact to the owner of the shop for more information"
			)
		}
	}, [])

	return (
		<div className={`${show} flex-row items-center justify-center bg-[#4d61d3] p-1`}>
			<FiAlertTriangle
				size={22}
				color="#ee2c2c"
				className="mr-3"
			/>
			<h1 className="text-center text-sm max-sm:text-xs max-sm:w-2/3">{message}</h1>
			<button
				onClick={() => setShow("hidden")}
				className="flex ml-3 hover:text-red-500 transition-all duration-200 ease-in-out"
			>
				<IoMdCloseCircleOutline size={25} />
			</button>
		</div>
	)
}
