const mongoose = require("mongoose")

const storySchema = mongoose.Schema({
    title: {type: String, },
    message: {type: String, },
    creator: {type: mongoose.Schema.Types.ObjectId, },
    tags: {type: [String], },
    selectedFile: {type: String, },
    likes: {type: [String], },
    createdAt: {type: Date, default: new Date()},
})

module.exports = mongoose.model("Story", storySchema)
