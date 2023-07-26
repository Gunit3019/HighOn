import React, { useRef } from "react";
import back from "../resources/back.svg";
import { Link } from "react-router-dom";
import ChipInput from "./ChipInput";
import { BsCameraFill } from "react-icons/bs";
import { MdFastfood, MdGames } from "react-icons/md";

const PostDesc = () => {
	const ref1 = useRef();
	const changeHandler1 = () => {
		ref1.current.style.backgroundColor = "#1B98F5";
		ref1.current.style.color = "#FFFFFF";
	};
	const ref2 = useRef();
	const changeHandler2 = () => {
		ref2.current.style.backgroundColor = "#1B98F5";
		ref2.current.style.color = "#FFFFFF";
	};
	const ref3 = useRef();
	const changeHandler3 = () => {
		ref3.current.style.backgroundColor = "#1B98F5";
		ref3.current.style.color = "#FFFFFF";
	};
	return (
		<div className="w-11/12 mx-auto space-y-2">
			<div className="flex justify-between mt-10">
				<Link to="/create/createPost/gallery">
					<img src={back} alt="" className="w-10" />
				</Link>
				<Link to="">
					<button className="rounded-2xl text-white p-2 pl-5 pr-5 bg-neutral-600">
						Post
					</button>
				</Link>
			</div>
			<img src="" alt="img" className="w-20" />
			<p className="text-blue-400">Description</p>
			<textarea className="border-2 rounded-lg w-full h-[10%] border-blue-400 p-2" />
			<hr />
			<ChipInput label="Tag People" />
			<hr />
			<ChipInput label="Location" />
			<hr />
			<div className="flex flex-col justify-center space-y-2">
				<p className="text-gray-400">Add your vibetags</p>
				<div className="flex justify-evenly text-sm">
					<button
						type="button"
						ref={ref1}
						onClick={changeHandler1}
						className="mr-2 focus:outline-none gap-2 flex items-center rounded-full bg-gray-200 px-2 py-1"
					>
						<BsCameraFill />
						Photography
					</button>
					<button
						type="button"
						ref={ref2}
						onClick={changeHandler2}
						className="mr-2 focus:outline-none gap-2 flex items-center rounded-full bg-gray-100 px-2 py-1"
					>
						<MdFastfood />
						Food vlogs
					</button>
					<button
						type="button"
						ref={ref3}
						onClick={changeHandler3}
						className="mr-2 focus:outline-none gap-2 flex items-center rounded-full bg-gray-100 px-2 py-1"
					>
						<MdGames />
						Gaming
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostDesc;
