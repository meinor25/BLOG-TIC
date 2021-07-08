const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },
        message:{
            type : String,
            required : true
        }
    },
    {
        versionKey : false,
        timestamps: true,
    }
)

module.exports = mongoose.model('Comment', commentSchema)