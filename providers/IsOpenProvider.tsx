import { useState, useMemo } from "react"

import { IsOpenContext } from "@/utils/contexts"
import { CLOSING_HOURS, OPENING_HOURS } from "@/utils/constants"

export default function IsOpenProvider({ children }: { children: React.ReactNode }) {
	const hour = new Date().getHours()
	const initialIsOpen = hour >= OPENING_HOURS && hour < CLOSING_HOURS

	const [isOpen, setIsOpen] = useState(initialIsOpen)

	return (
		<IsOpenContext.Provider value={useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen])}>
			{children}
		</IsOpenContext.Provider>
	)
}
