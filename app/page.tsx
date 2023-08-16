import Gallery from "@/components/Gallery"
import Image from "next/image"
import { FaPhone } from "react-icons/fa"

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<section className="w-full min-h-screen">
				{/* VIDEO BACKGROUND */}
				<video
					className="fixed w-full h-full object-cover mt-[-7vh] z-[-1]"
					autoPlay
					loop
					muted
					src="https://i.imgur.com/Tu0UM4O.mp4"
					typeof="video/mp4"
				></video>

				<div className="flex flex-col justify-center items-center bg-transparent">
					{/* TITLE */}
					<h1 className="max-sm:text-4xl shadow-2xl mt-10 text-6xl text-center font-black tracking-widest">
						KAVAKLAKERDA
					</h1>

					{/* LOGO */}
					<Image
						className="mt-10"
						src="/assets/logo.png"
						alt="logo"
						width={120}
						height={120}
					/>
				</div>
			</section>

			{/* GALLERY */}
			<section className="w-full mt-[-7vh] bg-gradient-to-b from-[#0c0c0c] to-[#141414]">
				<Gallery />
			</section>

			{/* CONTACT & ADRESS */}
			<section
				id="where"
				className="w-full h-screen pt-20 bg-gradient-to-t from-[#0c0c0c] to-[#141414]"
			>
				<div className="flex flex-col items-center justify-centers m-auto">
					{/* TITLE */}
					<h1 className="text-7xl text-center font-black tracking-widest">NEREDE</h1>

					{/* ADRESS */}
					<h2 className="text-3xl max-sm:text-2xl text-center mt-10">Rumeli Kavağı, Karakütük Cd. No:38</h2>
					<h2 className="text-3xl max-sm:text-2xl text-center">34450 Sarıyer/İstanbul</h2>

					{/* PHONE */}
					<div className="mt-10 flex">
						<FaPhone size={30} />
						<a
							className="text-3xl max-sm:text-2xl text-center ml-4"
							href="tel:+9005534945099"
						>
							+90 0553 494 50 99
						</a>
					</div>

					{/* MAP */}
					<iframe
						className="w-2/3 h-[400px] mt-10"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48046.38772473157!2d29.073538!3d41.180365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409fdfd9e82d2cad%3A0x4264152b9c228659!2zS2F2YWsgTGFrZXJkYSBCYWzEsWsgxZ5hcmvDvHRlcmk!5e0!3m2!1str!2str!4v1692214461035!5m2!1str!2str"
						loading="lazy"
					></iframe>
				</div>
			</section>
		</main>
	)
}
