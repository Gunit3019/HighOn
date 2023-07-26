const express = require("express");
const { likeController, fetchPosts } = require("../controllers/userController");
const { login, signUp } = require("../controllers/Auth") 
const { auth } = require("../middlewares/auth")
const { imageUpload } = require("../controllers/FileUpload");
const formidableMiddleware = require('express-formidable')

const router = express.Router();

router.post("/like", likeController);

//Authentication Routes
router.post("/signup", signUp);
router.post("/login", login)
router.post("/imageUpload",formidableMiddleware(), imageUpload );
router.get('/getPosts', fetchPosts)



module.exports = router;
