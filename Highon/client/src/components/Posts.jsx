import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Posts = () => {
	const { posts } = React.useContext(UserContext);
	return (
		<div className="relative pt-10">
			<Link to="/">
				<svg
					className="absolute top-5 left-5 w-10 h-10"
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 448 512"
				>
					<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
				</svg>
			</Link>
			<div>
				{posts.map((post, index) => (
					<Card key={index} postData={post} />
				))}
			</div>
		</div>
	);
};

export default Posts;
