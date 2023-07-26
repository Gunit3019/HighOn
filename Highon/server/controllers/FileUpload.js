const cloudinary = require("cloudinary");
const Post = require("../models/Post");

async function uploadFileToCloudinary(file, folder, quality) {
	const options = { folder };
	console.log;
	console.log("temp file path", file);
	if (quality) {
		options.quality = quality;
	}
	options.resource_type = "auto";
	return await cloudinary.uploader.upload(file.imageFile.path, options);
}

exports.imageUpload = async (req, res) => {
	try {
		//data fetch
		const { name, email, description } = req.fields;
		const file = req.files;
		console.log("Uploading to Codehelp");
		const response = await uploadFileToCloudinary(file, "Aditya");
		await Post.create({
			description,
			creator: email,
			creatorName: name,
			likes: {
				total: 0,
				users: [],
				usersName: [],
			},
			imagePost: response.secure_url,
		});
		res.json({
			success: true,
			imageUrl: response.secure_url,
			message: "Image Successfully Uploaded",
		});
		console.log("success");
	} catch (error) {
		console.error(error);
		res.status(400).json({
			success: false,
			message: "Something went wrong",
		});
	}
};
