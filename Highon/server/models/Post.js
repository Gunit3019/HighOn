const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    description: {type: String, required: true},
    creator: {type: String},
    creatorName: {type: String},
    tags: {type: [String], required: true},
    likes: {
      total: { type: Number },   
      users: { type: [mongoose.Schema.Types.ObjectId], default: [] },
      usersName : { type: [String], default: [] },
    },
    location: {type:String},
    imagePost: {type:String},
    createdAt: {type: Date, default: new Date()},
})

// postSchema.post("save", async function(doc) {
//   try{
//       console.log("DOC",doc)
//       let transporter = nodemailer.createTransport({
//           host: process.env.MAIL_HOST,
//           auth:{
//               user:process.env.MAIL_USER,
//               pass: process.env.MAIL_PASS,
//           },
//       });
//       console.log("INFO", info);
//   }
//   catch(error) {
//       console.error(error);
//   }
// })

module.exports = mongoose.model("Post", postSchema)
