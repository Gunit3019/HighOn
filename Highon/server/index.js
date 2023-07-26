const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use("/user", userRoutes);

mongoose
	.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true })
	.then(() =>
		app.listen(PORT, () => {
			console.log("Connected to database");
			console.log(`Server is running at port ${PORT}`);
		})
	)
	.catch((err) => {
		console.log(err);
	});

const cloudinaryConnect = () => {
	try {
		cloudinary.config({
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		});
		console.log("Cloudinary connected successfully!");
	} catch (error) {
		console.log(error);
	}
};
cloudinaryConnect();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads"); // Define the destination folder for uploaded files
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
//   },
// });

// const upload = multer({ storage });
//getUser
//getPosts
//
