const mongoose = require('mongoose')
const paginate = require('mongoose-paginate-v2')


const blogScheme = new mongoose.Schema(
    {
        title:{
            type: String,
            required : true,
            unique : true
        },
        content: {
            type: String,
            required: true,
        },
        img : {
            type: String
        },
        descripcion: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },
    {
        versionKey : false,
        timestamps: true,
    }
)
blogScheme.plugin(paginate)
module.exports = mongoose.model('blog', blogScheme)