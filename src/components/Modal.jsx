import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { notification } from "../assets";
import InfiniteLoopSlider from "./ui/infinite-loop-slider";

import { notifications } from "../constants";
import { IconCircleFilled } from "@tabler/icons-react";

const ExampleWrapper = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed z-50 bottom-4 right-4">
			<button
			className="relative inline-block p-px font-semibold leading-6 text-white-100 bg-tertiary shadow-2xl cursor-pointer rounded-full shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
			onClick={() => {
				setIsOpen(prev => !prev)
			}}
			>
			<span className="absolute inset-0 rounded-full bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[2px]"></span>

			<span className="relative z-10 block p-3 sm:p-4 rounded-full bg-gray-950">
				<img loading='lazy'  src={notification} alt="notification"/>
			</span>
			<div className="absolute w-6 h-6 top-0 right-0 z-10">
				<span className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full opacity-75 animate-ping"></span>

				<span className="absolute top-0 right-0 w-4 h-4 border-2 border-red-600 rounded-full"></span>

				<span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
			</div>
			</button>
			<SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

const SpringModal = ({ isOpen, setIsOpen }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => {
						setIsOpen(false)
					}}
					className="bg-slate-900/20 backdrop-blur sm:p-8 p-2 fixed inset-0 z-50 grid place-items-center cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="text-white-100 p-px w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
					>	
						<span className="absolute bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 inset-0"></span>
						<div className="relative bg-tertiary p-4 max-h-[500px] overflow-y-scroll">
								<div className="relative z-10 mb-4 overflow-hidden">
								<InfiniteLoopSlider
								duration={25000}
								>
									{
										notifications.map((noti) => (
											<li key={noti} className="mr-10 rounded-xl text-nowrap whitespace-nowrap w-fit px-2">
												{noti}
											</li>
										))
									}
								</InfiniteLoopSlider>
								</div>
								<h3 className="text-xl font-bold text-center mb-2">
									Latest Notifications
								</h3>
								<ul className="my-4 flex flex-col gap-2">
									{/* <li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-blue-600 underline"><a href="https://drive.google.com/file/d/1Ti_lCkh0LRIMSN4qGNXaN31OFuTgYA_Y/view?usp=sharing" target="_blank">Concepts Schedule</a></span>
									</li>
									<li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-white">Registrations for Concepts are now officially closed.</span>
									</li>
									<li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-white">Registrations for Pradnya are now officially closed.</span>
									</li>
									<li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-white">Registrations for Impetus are now officially closed.</span>
									</li>
									<li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-white">Hurry up! Registrations close on March 5 at 11:59 PM IST. Don&apos;t miss out!</span>
									</li> */}
									<li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-white">Registrations for Impetus officially started.</span>
									</li><li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-white">Registrations for Concepts officially started.</span>
									</li><li className="text-red-600 flex items-center gap-2">
										<span className="flex-shrink-0">
											<IconCircleFilled className="w-4 h-4" />
										</span>
										<span className="text-white">Registrations for Pradnya officially started.</span>
									</li>
								</ul>
								<div className="flex gap-2">
									<button
										onClick={() => {
											setIsOpen(false)
										}}
										className="bg-transparent hover:bg-white-100/10 transition-colors text-white-100 font-semibold w-full py-2"
									>
										Close
									</button>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ExampleWrapper;