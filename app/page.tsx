import Image from "next/image"
import Link from "next/link"
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import { SiInstagram, SiFacebook } from "react-icons/si"
import { Tooltip } from "@nextui-org/tooltip"

import { galleryImages, productImages_1, productImages_2 } from "@/data/images"

import FloatActionsButton from "@/components/FloatActionsButton"
import Gallery from "@/components/Gallery"
import {
	BACKGROUND_VIDEO_URL,
	FACEBOOK_URL,
	INSTAGRAM_URL,
	PHONE_NUMBER,
	PHONE_URL,
	WHATSAPP_URL,
	X_URL,
} from "@/utils/constants"
import XIcon from "@/components/XIcon"
import PhoneNumber from "@/components/PhoneNumber"

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			{/* FLOAT ACTIONS BUTTON */}
			<div className="fixed bottom-2 right-2 z-50">
				<FloatActionsButton />
			</div>

			<section className="w-full min-h-screen items-center justify-center">
				{/* VIDEO BACKGROUND */}
				<video
					id="home"
					className="w-full h-screen object-cover mt-[-7vh]"
					autoPlay
					loop
					muted
					src={BACKGROUND_VIDEO_URL}
					typeof="video/mp4"
				></video>

				<div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-[#00000000] to-[#053057]"></div>

				<div className="absolute top-20 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
					{/* TITLE */}
					<h1 className="max-sm:text-3xl max-mobile:text-2xl shadow-2xl mt-10 text-6xl text-center font-black tracking-widest">
						KAVAKLAKERDA
					</h1>
					<h3 className="max-sm:text-xl mt-5 max-mobile:text-lg text-4xl text-center font-black tracking-widest">
						BALIK ŞARKÜTERİ
					</h3>

					{/* LOGO */}
					<Image
						className="max-mobile:h-36 mt-10 animate-pulse hover:scale-110 ease-in-out transition-all duration-200"
						src="/assets/logo.png"
						alt="logo"
						width={150}
						height={150}
					/>

					{/* SHIPPING */}
					<div className="flex flex-col items-center justify-center mt-5">
						<p className="text-3xl max-mobile:text-base max-sm:text-2xl text-center mt-10 px-5 font-semibold">
							Şehir İçi & Şerhirler Arası Kargo İle Kapınıza Teslim
						</p>
						<div className="mt-5 flex max-sm:flex-col-reverse items-center">
							<div className="max-sm:mt-5 flex">
								<Link
									href={WHATSAPP_URL}
									target="_blank"
									className="hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100"
								>
									<FaWhatsapp className="text-[36px] max-sm:text-[31px] max-mobile:text-[25px] mr-5" />
								</Link>
								<Link
									href={PHONE_URL}
									target="_blank"
									className="hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100"
								>
									<FaPhone className="text-[33px] max-sm:text-[29px] max-mobile:text-[25px]" />
								</Link>
							</div>
							<PhoneNumber />
						</div>
					</div>

					{/* SOCIAL MEDIA */}
					<h2 className="text-3xl font-semibold max-mobile:text-base max-sm:text-2xl text-center mt-20 px-5">
						Sosyal Medya Hesaplarımız
					</h2>
					<div className="flex flex-row justify-center items-center">
						<Link
							href={X_URL}
							target="_blank"
						>
							<XIcon
								size="text-[45px]"
								style="max-sm:text-[34px] max-mobile:text-[32px] hover:text-cyan-300"
							/>
						</Link>
						<Link
							href={INSTAGRAM_URL}
							target="_blank"
						>
							<SiInstagram className="text-[35px] max-sm:text-[28px] max-mobile:text-[25px] mt-5 mr-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-cyan-300" />
						</Link>
						<Link
							href={FACEBOOK_URL}
							target="_blank"
						>
							<SiFacebook className="text-[35px] max-sm:text-[30px] max-mobile:text-[27px] mt-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-cyan-300" />
						</Link>
					</div>
				</div>
			</section>

			{/* GALLERY */}

			<section className="w-full mt-[-7vh] pt-[7vh] bg-gradient-to-b from-[#053057] to-[#2b5b88]">
				<h1 className="text-7xl max-sm:text-5xl text-center font-black tracking-widest mb-5">GALERİ</h1>

				<Gallery
					justify="justify-around"
					images={galleryImages}
					w={"w-[570px]"}
					h={"h-[350px]"}
					mx={"mx-5"}
					my={"my-5"}
				/>
			</section>

			{/* PRODUCTS 1 */}

			<section
				id="products"
				className="w-full bg-gradient-to-b from-[#2b5b88] to-[#1b3a57] pt-20"
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

			<section className="w-full bg-gradient-to-b from-[#1b3a57] to-[#021a30] pb-10 pt-20">
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
				className="w-full min-h-screen pt-20 bg-gradient-to-b from-[#021a30] to-[#011425]"
			>
				<div className="flex flex-col items-center justify-centers m-auto">
					{/* TITLE */}
					<h1 className="text-7xl max-sm:text-6xl text-center font-black tracking-widest">NEREDE</h1>

					{/* ADRESS */}
					<h2 className="text-3xl max-sm:text-2xl text-center mt-10">
						Rumeli Kavağı Mah. Liman Cad. No:38/A
					</h2>
					<h2 className="text-3xl max-sm:text-2xl text-center leading-[50px]">34450 Sarıyer / İstanbul</h2>

					{/* PHONE */}
					<div className="flex flex-row items-center justify-center mt-10">
						<Link
							href={PHONE_URL}
							target="_blank"
							className="items-center hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100"
						>
							<FaPhone size={29} />
						</Link>
						<PhoneNumber />
					</div>

					{/* MAP */}
					<iframe
						className="w-2/3 h-[400px] mt-10 border-4 invert hue-rotate-[200deg]"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48046.38772473157!2d29.073538!3d41.180365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409fdfd9e82d2cad%3A0x4264152b9c228659!2zS2F2YWsgTGFrZXJkYSBCYWzEsWsgxZ5hcmvDvHRlcmk!5e0!3m2!1str!2str!4v1692214461035!5m2!1str!2str"
						loading="lazy"
					></iframe>
				</div>
			</section>
		</main>
	)
}
