import { CgSandClock } from "react-icons/cg"

export default function ActiveTimes({
	timer,
	isOpen,
}: {
	timer: { hours: number; min: number; sec: number }
	isOpen: boolean
}) {
	return (
		<div
			className={`flex flex-col justify-center items-center transition-all ease-in-out animate-in fade-in-0 duration-1000`}
		>
			<div className="flex  justify-center items-center transition-all ease-in-out">
				<div className={`mt-3 py-2 px-3 rounded-xl ${isOpen ? "bg-[#4a48c4]" : "bg-red-500"}`}>
					<p className="text-2xl font-bold animate-pulse">{isOpen ? "AÇIK" : "KAPALI"}</p>
				</div>
			</div>
			<div
				className={`flex flex-row justify-center items-center text-xl max-mobile:text-xs mt-3 transition-all ease-in-out`}
			>
				<CgSandClock className="mr-2 animate-pulse text-2xl max-mobile:text-xs" />
				{timer.hours < 10 ? "0" + timer.hours : timer.hours}:{timer.min < 10 ? "0" + timer.min : timer.min}:
				{timer.sec < 10 ? "0" + timer.sec : timer.sec} sonra {isOpen ? " kapanıyor" : " açılıyor"}
			</div>
		</div>
	)
}
