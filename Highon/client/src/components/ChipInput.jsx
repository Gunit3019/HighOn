import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { BsFillTagFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const ChipInput = ({ label }) => {
	const [chips, setChips] = useState([]);
	const handleDeleteChip = (chipIndex) => {
		const newChip = chips.filter((_, index) => index !== chipIndex);
		setChips(newChip);
	};
	const handleKeyDown = (event) => {
		if (event.key === "Enter" || event.key === ",") {
			event.preventDefault();
			const chipValue = event.target.value.trim();
			if (chipValue && !chips.includes(chipValue)) {
				const newChip = [...chips, chipValue];
				setChips(newChip);
				event.target.value = "";
			}
		}
	};
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex w-full flex-wrap gap-y-2">
				<div className="flex justify-center items-center text-blue-400">
					{`${label}` === "Tag People" ? (
						<BsFillTagFill size={"30"} />
					) : (
						<MdLocationPin size={"30"} />
					)}
					<p className="text-lg">{label}</p>
				</div>
				{`${label}` === "Tag People" ? (
					<input
						id="tagPeople"
						type="text"
						placeholder="Enter the user handle"
						onKeyDown={handleKeyDown}
						style={{
							boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
						}}
						className="w-full rounded-[0.5rem] p-[12px] border-2"
					/>
				) : (
					<input
						id="tagPeople"
						type="text"
						placeholder="Enter your location"
						onKeyDown={handleKeyDown}
						style={{
							boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
						}}
						className="w-full rounded-[0.5rem] p-[12px] border-2"
					/>
				)}

				{chips.map((chip, index) => (
					<div
						key={index}
						className="m-1 flex items-center rounded-full bg-gray-200 px-2 py-1 text-sm text-richblack-5"
					>
						<button
							type="button"
							className="mr-2 focus:outline-none"
							onClick={() => handleDeleteChip(index)}
						>
							<IoIosRemoveCircle className="text-lg" />
						</button>
						{chip}
					</div>
				))}
			</div>
		</div>
	);
};

export default ChipInput;
