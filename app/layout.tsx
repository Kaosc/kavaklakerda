import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
import NavbarMargin from "@/components/navbar/NavbarMargin"

export const metadata: Metadata = {
	title: "Kavaklakerda",
	description: "A fish restaurant in Istanbul, Turkey",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<link
				rel="icon"
				href="assets/favicon.png"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta
				name="author"
				content="Kaosc"
			/>
			<meta
				name="robots"
				content="index, follow"
			/>
			<body className={inter.className}>
				<NavbarMargin />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
