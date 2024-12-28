import React from "react"
import Link from "next/link"
import { FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa"
import { SiFacebook, SiInstagram } from "react-icons/si"

import BubbleAnimation from "../animations/BubbleAnimation"

import { DEV_WEBSITE, FACEBOOK_URL, INSTAGRAM_URL, PHONE_URL, WHATSAPP_URL, X_URL } from "@/utils/constants"
import XIcon from "../XIcon"
import DipAnimation from "../animations/DipAnimation"

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className="flex w-full h-[300px] text-center items-center tracking-wider p-4 justify-center bg-gradient-to-b from-[#0A1726] to-[#010a13]">
			<div className="flex flex-col justify-center items-center z-20">
				<h4
					style={{
						color: "white",
					}}
				>
					Kavaklakerda @ {year} <br />{" "}
					<Link
						href={DEV_WEBSITE}
						target="_blank"
						className="text-[13px] hover:animate-pulse hover:font-bold ease-in-out transition-all duration-200"
					>
						{" "}
						Made by Kaøsc{" "}
					</Link>
				</h4>
				<div className="flex flex-row justify-center items-center">
					<Link
						href={X_URL}
						target="_blank"
					>
						<XIcon />
					</Link>
					<Link
						href={INSTAGRAM_URL}
						target="_blank"
					>
						<SiInstagram
							className="mt-5 mr-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-[#30608d]"
							size={24}
						/>
					</Link>
					<Link
						href={FACEBOOK_URL}
						target="_blank"
					>
						<SiFacebook
							className="mt-5 mr-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-[#30608d]"
							size={26}
						/>
					</Link>

					<Link
						href={PHONE_URL}
						target="_blank"
					>
						<FaPhoneSquareAlt
							className="mt-5 mr-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-[#30608d]"
							size={27}
						/>
					</Link>
					<Link
						href={WHATSAPP_URL}
						target="_blank"
					>
						<FaWhatsapp
							className="mt-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-[#30608d]"
							size={29}
						/>
					</Link>
				</div>
			</div>
			<BubbleAnimation
				intensity={50}
				h={"h-[300px]"}
			/>
			<DipAnimation />
		</div>
	)
}
