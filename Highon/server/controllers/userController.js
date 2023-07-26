const User = require("../models/User");
const Post = require("../models/Post");

const likeController = async (req, res) => {
	const reqUser = req.body.currentUser;
	const reqPostId = req.body.postId;

	try {
		const userFromDB = await User.findOne({ email: reqUser.email });
		const postFromDB = await Post.findOne({ _id: reqPostId });

		userFromDB.likedPosts.push(postFromDB);
		postFromDB.likes.users.push(userFromDB);
		postFromDB.likes.usersName.push(
			userFromDB.firstName + " " + userFromDB.lastName
		);
		postFromDB.likes.total += 1;

		await userFromDB.save();
		await postFromDB.save();

		res.status(200).json({ message: "Post liked" });
	} catch (err) {
		res.status(500).json({ message: "Error" });
	}
};

const fetchPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		return res.status(200).send({ success: true, posts: posts });
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Error while fetching Categories!",
		});
	}
};

module.exports = { likeController, fetchPosts };
