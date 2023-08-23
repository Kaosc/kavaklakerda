import { createContext } from "react"

const hour = new Date().getHours()

export const IsOpenContext = createContext<IsOpenContext>({
	isOpen: hour >= 9 && hour < 21,
	setIsOpen: () => {},
})
