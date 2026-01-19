const InfiniteLoopSlider = ({ children, duration, reverse = false, ...props }) => {
	return (
		<div
			className="flex w-fit animate-loop"
			style={{
				"--duration": `${duration}ms`,
				"--direction": reverse ? "reverse" : "normal",
			}}
			{...props}
			>
			<ul className="flex">
				{children}
				{children}
			</ul>
		</div>
	);
};

export default InfiniteLoopSlider