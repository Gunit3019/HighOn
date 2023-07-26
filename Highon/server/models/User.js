const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true},
    profilePicture: {type: String, required: false},
    id: {type: String},
    password: {type: String, required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: "Post"},
    createdAt: {type: Date, default: new Date()},
    likedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
    token: {type: String}
    
})

module.exports = mongoose.model("User", userSchema)