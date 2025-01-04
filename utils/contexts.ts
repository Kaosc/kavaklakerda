import { createContext } from "react"

import { CLOSING_HOURS, OPENING_HOURS } from "./constants"

const hour = new Date().getHours()
const initialIsOpen = hour >= OPENING_HOURS && hour < CLOSING_HOURS

export const IsOpenContext = createContext<IsOpenContext>({
	isOpen: initialIsOpen,
	setIsOpen: () => {},
})
