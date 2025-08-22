import Link from "next/link"

import { SiInstagram, SiFacebook } from "react-icons/si"
import { FaXTwitter, FaPhone, FaWhatsapp } from "react-icons/fa6"

import { productImages_1, productImages_2 } from "@/data/images"

import BubbleAnimation from "@/components/animations/BubbleAnimation"
import FloatActionsButton from "@/components/FloatActionsButton"
import ActiveTimes from "@/components/workingTimes/ActiveTimes"
import PhoneNumber from "@/components/PhoneNumber"
import Gallery from "@/components/Gallery"
import Logo from "@/components/Logo"

import {
	ADRESS_LINE_1,
	ADRESS_LINE_2,
	BACKGROUND_VIDEO_URL,
	FACEBOOK_URL,
	GOOGLE_MAPS_EMBED,
	INSTAGRAM_URL,
	MAP_URL,
	PHONE_URL,
	WHATSAPP_URL,
	WHERE_BACKGROUND_VIDEO_URL,
	X_URL,
} from "@/utils/constants"
import { Carousel } from "@/components/carousel"

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			{/* FLOAT ACTIONS BUTTON */}

			<div className="fixed bottom-2 right-2 z-50">
				<FloatActionsButton />
			</div>

			<section className="w-full min-h-screen items-center justify-center mt-[-7vh]">
				{/* VIDEO BACKGROUND */}
				<video
					id="home"
					className="absolute w-full h-full object-cover"
					autoPlay
					loop
					muted
					src={BACKGROUND_VIDEO_URL}
					typeof="video/mp4"
				/>

				{/* BUBBLES */}
				<div className="bottom-0 absolute w-full h-[200px]">
					<BubbleAnimation intensity={50} />
				</div>

				<div className="flex max-xl:flex-col max-xl:items-center max-xl:justify-center relative min-h-screen pt-24 bg-gradient-to-b from-[#00000000] to-[#053057] transition-all ease-in-out">
					{/* LEFT */}
					<div className="flex w-full flex-col items-start pt-40 pl-56 max-2xl:pl-32 max-xl:pt-0 max-xl:pl-0 max-xl:items-center max-xl:justify-center">
						{/* TITLE */}
						<h1 className="max-xl:text-center text-7xl max-xl:text-5xl max-sm:text-4xl max-mobile:text-3xl shadow-2xl font-black tracking-widest animate-in slide-in-from-top duration-500">
							KAVAKLAKERDA
						</h1>
						<h3 className="max-xl:text-center max-lg:px-32 max-md:px-24 max-sm:px-2 text-3xl max-2xl:text-xl max-xl:text-base max-sm:text-small mt-5 animate-in slide-in-from-bottom duration-500 font-extralight">
							Balık ve deniz ürünleri konusunda uzmanlaşmış
							<br />
							İstanbul&apos;un en iyi balık şarküterisi
						</h3>

						{/* LOGO */}
						<Logo />
					</div>

					{/* RIGHT */}
					<div className="flex w-full flex-col items-end pt-40 pr-56 max-2xl:pr-40 max-xl:pt-0 max-xl:pr-0 max-xl:items-center max-xl:justify-center">
						{/* WORKING HOURS */}
						<ActiveTimes />

						{/* SHIPPING */}
						<div className="flex flex-col transition-all ease-in-out mt-3">
							<p className="text-3xl text-end max-mobile:text-base max-sm:text-[22px] mt-10 font-semibold max-xl:text-center">
								Şehir İçi & Şehirler Arası Kargo
							</p>
							<div className="mt-5 flex max-xl:flex-col-reverse justify-end max-xl:items-center max-xl:justify-center font-extralight">
								<div className="mt-1 max-sm:mt-5 flex">
									<Link
										href={WHATSAPP_URL}
										target="_blank"
										className="hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100"
									>
										<FaWhatsapp className="text-[32px] max-sm:text-[27px] max-mobile:text-[25px] mr-5" />
									</Link>
									<Link
										href={PHONE_URL}
										target="_blank"
										className="hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100"
									>
										<FaPhone className="text-[27px] max-sm:text-[22px] max-mobile:text-[21px] mt-[3px]" />
									</Link>
								</div>
								<PhoneNumber />
							</div>
						</div>

						<p className="text-3xl max-mobile:text-base max-sm:text-2xl mt-12 font-semibold">Sosyal Medya</p>
						{/* SOCIAL MEDIA */}
						<div className="flex flex-row items-center justify-end">
							<Link
								href={INSTAGRAM_URL}
								target="_blank"
							>
								<SiInstagram className="text-[31px] max-sm:text-[25px] max-mobile:text-[23px] mt-5 mr-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-cyan-300" />
							</Link>
							<Link
								href={FACEBOOK_URL}
								target="_blank"
							>
								<SiFacebook className="text-[31px] max-sm:text-[27px] max-mobile:text-[24px] mt-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-cyan-300" />
							</Link>
							<Link
								href={X_URL}
								target="_blank"
							>
								<FaXTwitter className="text-[32px] max-sm:text-[25px] max-mobile:text-[23px] mt-5 ml-5 hover:scale-110 ease-in-out transition-all duration-200 hover:text-cyan-300" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* GALLERY */}

			<section className=" flex-col min-h-[120vh] w-full overflow-hidden justify-center items-center py-20 bg-gradient-to-b from-[#053057] to-[#2b5b88]">
				{/* BUBBLES */}
				<BubbleAnimation intensity={25} />

				<div className="w-full items-center justify-center flex h-screen flex-col">
					<div className="flex w-[70%] overflow-hidden items-center h-full justify-center flex-col">
						<h1 className="text-7xl max-sm:text-5xl text-center font-black tracking-widest mb-10">GALERİ</h1>
						<Carousel />
					</div>
				</div>
			</section>

			{/* PRODUCTS 1 */}

			<section
				id="products"
				className="w-full min-h-screen pt-8 bg-gradient-to-b from-[#2b5b88] to-[#1b3a57]"
			>
				{/* BUBBLES */}
				<BubbleAnimation intensity={35} />

				<h1 className="text-7xl max-sm:text-5xl text-center font-black tracking-widest mb-5">ÜRÜNLER</h1>
				<Gallery
					justify="justify-center"
					containerClassName="px-20 max-sm:px-0"
					images={productImages_1}
					w={"w-[300px]"}
					h={"h-[300px]"}
					mx={"mx-10"}
					my={"my-5"}
				/>
			</section>

			{/* PRODUCTS 2 */}

			<section className="w-full min-h-screen py-20 bg-gradient-to-b from-[#1b3a57] to-[#021a30]">
				{/* BUBBLES */}
				<BubbleAnimation intensity={45} />

				<h1 className="text-7xl max-sm:text-5xl text-center font-black tracking-widest">KAVANOZ ÜRÜNLER</h1>
				<Gallery
					justify="justify-center"
					containerClassName="px-20 max-sm:px-0"
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
				className="relative w-full min-h-screen"
			>
				{/* WHERE VIDEO BACKGROUND */}
				<video
					id="home"
					className="absolute w-full h-full object-cover brightness-200 grayscale"
					autoPlay
					loop
					muted
					src={WHERE_BACKGROUND_VIDEO_URL}
					typeof="video/mp4"
				/>

				<div className="relative min-h-screen flex flex-col items-center justify-center m-auto bg-gradient-to-b from-[#021a30] to-[#011425e5]">
					{/* TITLE */}
					<h1 className="text-7xl max-sm:text-6xl text-center font-black tracking-widest">NEREDE</h1>

					{/* ADRESS */}
					<Link
						href={MAP_URL}
						target="_blank"
						className="flex flex-col items-center justify-center hover:text-cyan-300 ease-in-out transition-all duration-100 text-3xl max-md:text-2xl font-extralight max-sm:text-lg text-center"
					>
						<h2 className="mt-10">{ADRESS_LINE_1}</h2>
						<h2 className="leading-[50px]">{ADRESS_LINE_2}</h2>
					</Link>

					{/* PHONE */}
					<div className="flex flex-row items-center justify-center mt-10 font-extralight">
						<Link
							href={PHONE_URL}
							target="_blank"
							className="items-center hover:scale-105 hover:text-cyan-300 ease-in-out transition-all duration-100"
						>
							<FaPhone className="max-md:mr-3 text-3xl max-md:text-2xl" />
						</Link>
						<PhoneNumber />
					</div>

					{/* MAP */}
					<iframe
						className="w-2/4 h-[400px] mt-10 border-4 invert hue-rotate-[200deg] opacity-50 hover:opacity-100 max-sm:opacity-100 max-sm:w-3/4 hover:scale-110 transition-all duration-300 ease-in-out"
						src={GOOGLE_MAPS_EMBED}
						loading="lazy"
					></iframe>
				</div>
			</section>
		</main>
	)
}
