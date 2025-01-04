import "./globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
const inter = Inter({ subsets: ["latin"] })

import { Providers } from "./providers"

import NavbarMargin from "@/components/navbar/NavbarMargin"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import Announcement from "@/components/Announcement"
import { FACEBOOK_URL, INSTAGRAM_URL, SITE_DESCRIPTION, SITE_URL, X_URL } from "@/utils/constants"

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Kavak Lakerda | Balık Şarküteri",
		template: "%s | Kavak Lakerda",
	},
	description: SITE_DESCRIPTION,
	openGraph: {
		title: "Kavak Lakerda | Balık Şarküteri",
		description: SITE_DESCRIPTION,
		url: SITE_URL,
		locale: "tr_TR",
		siteName: "Kavak Lakerda",
		type: "website",
	},
	robots: "index, follow",
	authors: [{ name: "Kaosc" }],
	keywords: [
		"Kavak Lakerda",
		"kavaklakerda",
		"kavaklakerda istanbul",
		"balık",
		"balık şarküteri",
		"balık ve deniz ürünleri",
		"rumeli",
		"rumeli kavağı",
		"rumeli kavağı balık",
		"kavaklakerda turkey",
		"kavaklakerda fish",
		"kavaklakerda fish delicatessen",
		"kavaklakerda fish delicatessen istanbul",
		"kavaklakerda fish delicatessen turkey",
		"kavaklakerda fish delicatessen fish",
		"kavaklakerda fish delicatessen fish istanbul",
		"kavaklakerda fish delicatessen fish turkey",
		"kavaklakerda fish delicatessen fish delicatessen",
		"kavaklakerda fish delicatessen fish delicatessen istanbul",
		"kavaklakerda fish delicatessen fish delicatessen turkey İstanbul/",
	],
	verification: {
		google: "oZV9oMz8xInRmpVZ3SKxdxLhRQ26GGqaL0dR6uhrrL8",
	},
	icons: {
		icon: "favicon.png",
	},
}

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Kavak Lakerda",
	url: SITE_URL,
	logo: "/assets/logo.png",
	sameAs: [FACEBOOK_URL, INSTAGRAM_URL, X_URL],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="tr"
			className="dark"
		>
			<head>
				<meta
					name="theme-color"
					content="#000000"
				/>
				<meta name="darkreader-lock" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</head>
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
