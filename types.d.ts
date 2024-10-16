type GImage = {
	src: string
	lcl: string
	title?: string
	stock?: boolean
	w?: number
	h?: number
}

type IsOpenContext = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
