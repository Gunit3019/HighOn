import React from "react";
import cross from "../resources/cross.svg";
import add from "../resources/add.svg";
import { Link } from "react-router-dom";

const Create = () => {
	return (
		<div className="p-10 pt-80 text-lg">
			<div className="m-auto bg-gray-200 p-5 flex-row space-y-4 rounded-3xl">
				<Link to="/" className="flex justify-end">
					<button>
						<img src={cross} alt="" className="w-10" />
					</button>
				</Link>
				<Link to="/create/createPost">
					<button className="flex gap-5 items-center">
						<img src={add} alt="" className="w-8" />
						<p>Create a Post</p>
					</button>
				</Link>
				<div className="h-[2px] bg-slate-400" />
				<Link to="/create/createStory">
					<button className="flex gap-5 items-center pt-4">
						<img src={add} alt="" className="w-8" />
						<p>Create a Story</p>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Create;
