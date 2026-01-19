import { cn } from "../../lib/utils";
import { useRef } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
	initial: {
		x: 0,
		y: 0,
	},
	animate: {
		x: 20,
		y: -20,
		opacity: 0.9,
	},
};

const secondaryVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

export const FileUpload = ({
	value, onChange, ...otherProps
}) => {
	const fileInputRef = useRef(null);

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const { getRootProps, isDragActive } = useDropzone({
		multiple: false,
		noClick: true,
		onDrop: (files) => { onChange(files) },
		onDropRejected: () => {
			// console.log(error);
		},
	});

	return (
		(<div className="w-full" {...getRootProps()}>
			<motion.div
				onClick={handleClick}
				whileHover="animate"
				className="group/file block rounded-lg cursor-pointer w-full relative overflow-hidden">
				<input
					ref={fileInputRef}
					id="collegeID"
					name="collegeID"
					type="file"
					accept="image/*"
					onChange={(e) => onChange(e.target.files)}
					{...otherProps}
					className="hidden" />
				<div className="flex flex-col items-center justify-center">
					<p
						className="relative z-20 font-sans font-normal text-secondary text-base">
						Drag and Drop or Click to Upload ( upto <span className="text-red-500 text-sm">512kb</span> )
					</p>
					<div className="relative w-full max-w-xl mx-auto">
						{value &&
							<div
								className={cn(
									"relative overflow-hidden z-40 bg-[#060C1C] flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto",
									"shadow-sm"
								)}>
								<div className="flex justify-between w-full items-center gap-4">
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										layout
										className="text-base text-neutral-300 truncate max-w-xs">
										{value.name}
									</motion.p>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										layout
										className="rounded-md px-2 py-1 w-fit flex-shrink-0 text-sm bg-slate-800 text-white shadow-input">
										{(value.size / (1024 * 1024)).toFixed(2)} MB
									</motion.p>
								</div>

								<div
									className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-400">
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										layout
										className="px-2 py-1 rounded-md bg-slate-800">
										{value.type}
									</motion.p>

									<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout>
										modified{" "}
										{new Date(value.lastModified).toLocaleDateString()}
									</motion.p>
								</div>
							</div>
						}
						{!value && (
							<motion.div
								layoutId="file-upload"
								variants={mainVariant}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 20,
								}}
								className={cn(
									"relative group-hover/file:shadow-2xl z-40 bg-[#060C1C] border-[1px] border-secondary flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto",
									"shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
								)}>
								{isDragActive ? (
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="text-neutral-600 flex flex-col items-center">
										Drop it
										<IconUpload className="h-4 w-4 text-white-100" />
									</motion.p>
								) : (
									<IconUpload className="h-4 w-4 text-white-100" />
								)}
							</motion.div>
						)}

						{!value && (
							<motion.div
								variants={secondaryVariant}
								className="absolute opacity-0 border border-dashed border-secondary inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto"></motion.div>
						)}
					</div>
				</div>
			</motion.div>
		</div>)
	);
};

