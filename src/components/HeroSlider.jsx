import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { gal1, gal2, gal3, gal4, gal5, gal6, gal7 } from "../assets";

const imgs = [
	gal1,
	gal2,
	gal3,
	gal4,
	gal5,
	gal6,
	gal7,
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;

const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 350,
	damping: 50,
};

const HeroSlider = () => {
	const [imgIndex, setImgIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(true);

	const actualImgs = [...imgs, imgs[0]];
	const totalImgs = imgs.length;

	useEffect(() => {
		const intervalRef = setInterval(() => {
			setImgIndex((prevIndex) => (prevIndex + 1) % (totalImgs + 1));
		}, AUTO_DELAY);

		return () => clearInterval(intervalRef);
	}, [totalImgs]);

	useEffect(() => {
		if (imgIndex === totalImgs) {
			setTimeout(() => {
				setIsAnimating(false);
				setImgIndex(0);
			}, 1000);
		} else {
			setIsAnimating(true);
		}
	}, [imgIndex, totalImgs]);

	return (
		<div className="relative z-0 overflow-hidden blur-[2px] opacity-25">
			<motion.div
				animate={{
					translateX: `-${imgIndex * 100}%`,
				}}
				transition={isAnimating ? SPRING_OPTIONS : { duration: 0 }}
				className="flex items-center"
			>
				<Images imgs={actualImgs} />
			</motion.div>
		</div>
	);
};

const Images = ({ imgs }) => {
	return (
		<>
			{imgs.map((imgSrc, idx) => (
				<motion.div
					key={idx}
					style={{
						backgroundImage: `url(${imgSrc})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
					className="aspect-auto w-screen h-screen shrink-0"
				/>
			))}
		</>
	);
};

export default HeroSlider