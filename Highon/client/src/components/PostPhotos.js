import React from "react";
import PostHomeCard from "./PostHomeCard";

const PostPhotos = () => {
	return (
		<div>
			<div className="bg-gray-100 min-h-[90vh]">
				{/* To be render using map */}
				<PostHomeCard />
			</div>
		</div>
	);
};

export default PostPhotos;
