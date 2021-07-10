const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.ObjectId


const commentSchema = new mongoose.Schema(
    {
        post_id:{
            type: String
        },
        user: {
            type: String,
            unique: true
        },
        message:{
            type : String,
        }
    },
    {
        versionKey : false,
        timestamps: true,
    }
)

module.exports = mongoose.model('Comment', commentSchema)