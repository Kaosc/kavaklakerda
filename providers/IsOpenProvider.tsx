import { useState, useMemo } from "react"
import { IsOpenContext } from "@/utils/contexts"

export default function IsOpenProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<IsOpenContext.Provider value={useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen])}>
			{children}
		</IsOpenContext.Provider>
	)
}
