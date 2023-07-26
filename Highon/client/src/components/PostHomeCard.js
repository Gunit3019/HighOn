import React from "react";
import post from "../resources/post.jpeg";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const PostHomeCard = () => {
	const { posts } = React.useContext(UserContext);
	const navigate = useNavigate();
	return (
		<div className=" flex justify-center items-center pt-14">
			<div className=" flex  flex-wrap " onClick={() => navigate("/post")}>
				{posts.map((post, index) => (
					<div key={post._id} className="w-[45%] m-2  ">
						<img src={post.imagePost} alt="" className=" rounded-xl" />
					</div>
				))}
			</div>
		</div>
	);
};

export default PostHomeCard;
