import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
import NavbarMargin from "@/components/navbar/NavbarMargin"

export const metadata: Metadata = {
	title: "Kavaklakerda",
	description: "A fish delicatessen in Istanbul, Turkey",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<link
				rel="icon"
				href="/assets/favicon.png"
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
			<meta
				name="description"
				content="A fish delicatessen in Istanbul, Turkey"
			/>
			<meta
				name="keywords"
				content="kavaklakerda, kavaklakerda.com, kavaklakerda istanbul, kavaklakerda turkey, kavaklakerda fish, kavaklakerda fish delicatessen, kavaklakerda fish delicatessen istanbul, kavaklakerda fish delicatessen turkey, kavaklakerda fish delicatessen fish, kavaklakerda fish delicatessen fish istanbul, kavaklakerda fish delicatessen fish turkey, kavaklakerda fish delicatessen fish delicatessen, kavaklakerda fish delicatessen fish delicatessen istanbul, kavaklakerda fish delicatessen fish delicatessen turkey"
			/>
			<meta
				name="theme-color"
				content="#000000"
			/>
			<body className={inter.className}>
				<NavbarMargin />
				<Navbar />
				{children}
			</body>
		</html>
	)
}
