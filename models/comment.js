const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.ObjectId


const commentSchema = new mongoose.Schema(
    {   
        post_id: {
            type: String
        },
        user: {
            type: String,
            required: true
        },
        message:{
            type : String,
        },
        date: {
            type : Date,
            default: Date.now()
        }
    },
    {
        versionKey : false,
        timestamps: true,
    }
)

module.exports = mongoose.model('comment', commentSchema)