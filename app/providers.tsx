"use client"

import IsOpenProvider from "@/providers/IsOpenProvider"
import { NextUIProvider } from "@nextui-org/react"

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<IsOpenProvider>{children}</IsOpenProvider>
		</NextUIProvider>
	)
}
