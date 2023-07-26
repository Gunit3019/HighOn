// export default Gallery
import React, { useState } from "react";
import axios from "axios";
import ChipInput from "./ChipInput";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const CreateStory = () => {
	const navigate = useNavigate();
	const { fetchPosts } = React.useContext(UserContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDescription] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
	const [message, setMessage] = useState("");

	const handleImageChange = (e) => {
		setImageFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("name", name);
			formData.append(
				"email",
				JSON.parse(localStorage.getItem("user_info")).user.email
			);
			formData.append("description", description);
			formData.append("imageFile", imageFile);

			const response = await axios.post(
				"http://localhost:4000/user/imageUpload",

				formData
			);
			setImageUrl(response.data.imageUrl);
			setMessage(response.data.message);
			fetchPosts();
			navigate("/");
		} catch (error) {
			console.error(error);
			setMessage("Something went wrong");
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center flex-col h-[100vh]"
			>
				<h1 className="text-3xl ">Create a Story </h1>
				<div className="mb-5 flex-col flex w-[100%]">
					<label className="ml-[12%] text-blue-400 text-xl">Video/Image</label>
					<input
						type="file"
						onChange={handleImageChange}
						className="border-2 w-[80%] m-auto py-2 pl-3 rounded-lg"
						placeholder="This is my new Highon post "
					/>
				</div>
				<ChipInput label="Tag People" />
				<hr />
				<ChipInput label="Location" />
				<hr />
				<button
					type="submit"
					className="p-4 bg-blue-600 px-6 rounded-xl text-white"
				>
					Post
				</button>
			</form>
			{imageUrl && <img src={imageUrl} alt="Uploaded" />}
			{message && <p>{message}</p>}
		</div>
	);
};

export default CreateStory;
