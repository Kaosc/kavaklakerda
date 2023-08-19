import Link from "next/link"
import React from "react"
import { SiFacebook, SiInstagram } from "react-icons/si"

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className="flex w-full h-52 text-center items-center tracking-wider p-4 justify-center bg-gradient-to-b from-[#011425] to-[#010a13]">
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
						href="https://www.instagram.com/kavaklakerda"
						target="_blank"
					>
						<SiInstagram
							className="mt-5 mr-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-cyan-300"
							size={25}
						/>
					</Link>
					<Link
						href="https://www.facebook.com/kavaklakerda"
						target="_blank"
					>
						<SiFacebook
							className="mt-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-cyan-300"
							size={26}
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}
