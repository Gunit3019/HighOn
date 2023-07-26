import React from "react";
import { Link } from "react-router-dom";
import back from "../resources/back.svg";
import gallery from "../resources/gallery.svg";
import camera from "../resources/camera.svg";

const CreatePost = () => {
	return (
		<div className="flex flex-col space-y-4">
			<Link to="/create">
				<img src={back} alt="back" className="w-10 mt-5 ml-5" />
			</Link>
			<Link to="/create/createPost/gallery" className="mx-auto">
				<button className="flex gap-5 items-center">
					<img src={gallery} alt="" className="w-8" />
					<p>Pick from Gallery</p>
				</button>
			</Link>
			<div className="h-[2px] bg-slate-400 w-11/12 mx-auto" />
			<Link to="/create/createPost/camera" className="mx-auto">
				<button className="flex gap-5 items-center">
					<img src={camera} alt="" className="w-8" />
					<p>Capture with Camera</p>
				</button>
			</Link>
		</div>
	);
};

export default CreatePost;
