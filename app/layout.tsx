import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

import { Providers } from "./providers"

import NavbarMargin from "@/components/navbar/NavbarMargin"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Announcement from "@/components/Announcement"

export const metadata = {
	title: "Kavaklakerda | Balık Şarküteri",
	description: "Balık ve deniz ürünleri konusunda uzmanlaşmış, İstanbul'un en iyi balık şarküterisi.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<meta
				name="google-site-verification"
				content="oZV9oMz8xInRmpVZ3SKxdxLhRQ26GGqaL0dR6uhrrL8"
			/>
			<link
				rel="icon"
				href="favicon.png"
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
				content={metadata.description}
			/>
			<meta
				name="keywords"
				content="kavaklakerda, kavaklakerda istanbul, balık, balık şarküteri, balık ve deniz ürünleri, rumeli, rumeli kavağı, rumeli kavağı balık, kavaklakerda turkey, kavaklakerda fish, kavaklakerda fish delicatessen, kavaklakerda fish delicatessen istanbul, kavaklakerda fish delicatessen turkey, kavaklakerda fish delicatessen fish, kavaklakerda fish delicatessen fish istanbul, kavaklakerda fish delicatessen fish turkey, kavaklakerda fish delicatessen fish delicatessen, kavaklakerda fish delicatessen fish delicatessen istanbul, kavaklakerda fish delicatessen fish delicatessen turkey İstanbul/"
			/>
			<meta
				name="theme-color"
				content="#000000"
			/>
			<meta name="darkreader-lock" />
			<body className={inter.className}>
				<Providers>
					<Announcement />
					<NavbarMargin />
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
