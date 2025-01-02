import { createContext } from "react"

export const IsOpenContext = createContext<IsOpenContext>({
	isOpen: false,
	setIsOpen: () => {},
})
