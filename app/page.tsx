import Gallery from "@/components/Gallery"
import Image from "next/image"
import { FaPhone } from "react-icons/fa"

import { galleryImages, productImages_1, productImages_2 } from "@/data/images"

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<section className="w-full min-h-screen items-center justify-center">
				{/* VIDEO BACKGROUND */}
				<video
					className="w-full h-screen object-cover mt-[-7vh] brightness-50 backdrop-blur-sm"
					autoPlay
					loop
					muted
					src="https://i.imgur.com/Tu0UM4O.mp4"
					typeof="video/mp4"
				></video>

				<div className="absolute top-20 left-0 right-0 flex flex-col justify-center items-center">
					{/* TITLE */}
					<h1 className="max-sm:text-4xl shadow-2xl mt-10 text-6xl text-center font-black tracking-widest">
						KAVAKLAKERDA
					</h1>

					{/* LOGO */}
					<Image
						className="mt-10 animate-pulse hover:scale-110 ease-in-out transition-all duration-200	"
						src="/assets/logo.png"
						alt="logo"
						width={120}
						height={120}
					/>
				</div>
			</section>

			{/* GALLERY */}

			<section className="w-full mt-[-7vh] bg-gradient-to-b from-[#000] to-[#0c0c0c]">
				<Gallery
					justify="justify-around"
					images={galleryImages}
					w={"w-[500px]"}
					h={"h-[350px]"}
					mx={"mx-10"}
					my={"my-10"}
				/>
			</section>

			{/* PRODUCTS 1 */}

			<section
				id="products"
				className="w-full bg-gradient-to-b from-[#000] to-[#0c0c0c] pt-20"
			>
				<h1 className="text-7xl max-sm:text-5xl text-center font-black tracking-widest mb-5">ÜRÜNLER</h1>
				<Gallery
					justify="justify-center"
					images={productImages_1}
					w={"w-[300px]"}
					h={"h-[300px]"}
					mx={"mx-5"}
					my={"my-5"}
				/>
			</section>

			{/* PRODUCTS 2 */}

			<section className="w-full bg-gradient-to-b from-[#0c0c0c] to-[#000] pb-10 pt-20">
				<h1 className="text-7xl max-sm:text-5xl text-center font-black tracking-widest">KAVANOZ ÜRÜNLER</h1>
				<Gallery
					justify="justify-center"
					images={productImages_2}
					w={"w-[300px]"}
					h={"h-[300px]"}
					mx={"mx-10"}
					my={"my-10"}
				/>
			</section>

			{/* WHERE */}
			<section
				id="where"
				className="w-full h-screen pt-20 bg-gradient-to-t from-[#0c0c0c] to-[#141414]"
			>
				<div className="flex flex-col items-center justify-centers m-auto">
					{/* TITLE */}
					<h1 className="text-7xl max-sm:text-6xl text-center font-black tracking-widest">NEREDE</h1>

					{/* ADRESS */}
					<h2 className="text-3xl max-sm:text-2xl text-center mt-10">Rumeli Kavağı, Karakütük Cd. No:38</h2>
					<h2 className="text-3xl max-sm:text-2xl text-center">34450 Sarıyer/İstanbul</h2>

					{/* PHONE */}
					<a
						href="tel:+905534945099"
						className="mt-10 flex items-center hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100"
					>
						<FaPhone size={29} />
						<p className="text-3xl max-sm:text-2xl text-center ml-4">+90 553 494 50 99</p>
					</a>

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
