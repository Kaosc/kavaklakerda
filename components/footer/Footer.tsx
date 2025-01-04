import React from "react"
import Link from "next/link"

import { FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa"
import { SiFacebook, SiInstagram } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"

import { DEV_WEBSITE, FACEBOOK_URL, INSTAGRAM_URL, PHONE_URL, WHATSAPP_URL, X_URL } from "@/utils/constants"

import BubbleAnimation from "../animations/BubbleAnimation"
import DipAnimation from "../animations/DipAnimation"

export default function Footer() {
	const year = new Date().getFullYear()

	const links = [
		{
			name: "Twitter",
			url: X_URL,
			icon: <FaXTwitter size={25} />,
		},
		{
			name: "Instagram",
			url: INSTAGRAM_URL,
			icon: <SiInstagram size={24} />,
		},
		{
			name: "Facebook",
			url: FACEBOOK_URL,
			icon: <SiFacebook size={26} />,
		},
		{
			name: "Phone",
			url: PHONE_URL,
			icon: <FaPhoneSquareAlt size={27} />,
		},
		{
			name: "Whatsapp",
			url: WHATSAPP_URL,
			icon: <FaWhatsapp size={29} />,
		},
	]

	return (
		<div className="flex w-full h-[300px] text-center items-center tracking-wider p-4 justify-center bg-gradient-to-b from-[#0A1726] to-[#010a13]">
			<div className="flex flex-col justify-center items-center z-20">
				{/* AUTHOR & DATE */}
				<h4 style={{ color: "white" }}>
					Kavak Lakerda @ {year} <br />{" "}
					<Link
						href={DEV_WEBSITE}
						target="_blank"
						className="text-[13px] hover:animate-pulse hover:font-bold ease-in-out transition-all duration-200"
					>
						{" "}
						Made by Kaøsc{" "}
					</Link>
				</h4>

				{/* LINKS ARRAY  */}
				<div className="flex flex-row justify-center items-center mt-5">
					{links.map((link, index) => (
						<a
							key={index}
							href={link.url}
							target="_blank"
							className={`text-white hover:animate-pulse ease-in-out transition-all duration-200 ${
								index !== links.length - 1 ? "mr-4" : ""
							}`}
						>
							{link.icon}
						</a>
					))}
				</div>
			</div>

			{/* BUBBLE ANIMATION */}
			<BubbleAnimation
				intensity={50}
				h={"h-[300px]"}
			/>
			<DipAnimation />
		</div>
	)
}
