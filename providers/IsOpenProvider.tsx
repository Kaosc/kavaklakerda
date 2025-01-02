import { useState, useMemo } from "react"
import { IsOpenContext } from "@/utils/contexts"

export default function IsOpenProvider({ children }: { children: React.ReactNode }) {
	const hour = new Date().getHours()

	const [isOpen, setIsOpen] = useState(hour >= 9 && hour < 21)

	return (
		<IsOpenContext.Provider value={useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen])}>
			{children}
		</IsOpenContext.Provider>
	)
}
