import React from "react";

const RadioButton = React.forwardRef(
	({ options, onChange, errorMessage="", name, ...props }, ref) => {

		return (
			<div
			className="w-full"
			>
				<div
				className="flex items-center w-1/2 justify-between"
				>
					{options.map((option, index) => (
						<label
							key={index}
							className="cursor-pointer flex items-center gap-2"
						>
							<input
								type="radio"
								name={name}
								value={option.value}
								onChange={onChange}
								ref={ref}
								className="appearance-none disabled:opacity-50 w-5 h-5 border-2 border-gray-500 rounded-full checked:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-100"
								{...props}
							/>
							{option.label}
						</label>
					))}
				</div>
				{errorMessage && (
					<div className="absolute mt-[1px] flex items-center gap-2 pb-2 pt-1 text-sm text-red-600 bg-tertiary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5 text-red-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v3m0 3h.01m-6.938 4h13.856c1.054 0 1.987-.816 2.052-1.87L21.942 10c.065-1.054-.724-1.918-1.788-1.918H4.846c-1.054 0-1.787.84-1.722 1.87L4.92 19.13C4.985 20.184 5.918 21 6.972 21z"
							/>
						</svg>
						<p>{errorMessage}</p>
					</div>
				)}
			</div>
		);
	}
);

RadioButton.displayName = "RadioButton";

export { RadioButton };
