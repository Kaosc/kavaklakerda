import { createContext } from "react"

export const IsOpenContext = createContext<IsOpenContext>({
	isOpen: localStorage.getItem("isOpen") === "true" ? true : false,
	setIsOpen: () => {},
})
