import React from "react"
import Link from "next/link"
import { FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa"
import { SiFacebook, SiInstagram } from "react-icons/si"

import XIcon from "../XIcon"
import { FACEBOOK_URL, INSTAGRAM_URL, PHONE_URL, WHATSAPP_URL, X_URL } from "@/utils/constants"

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className="flex w-full pt-20 pb-20 text-center items-center tracking-wider p-4 justify-center bg-gradient-to-b from-[#011425] to-[#010a13]">
			<div>
				<h4
					style={{
						color: "white",
					}}
				>
					Kavaklakerda @ {year} <br />{" "}
					<Link
						href="https://kaosc.vercel.app"
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
		</div>
	)
}
