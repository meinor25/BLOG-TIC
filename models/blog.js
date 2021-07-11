const mongoose = require('mongoose')


const blogScheme = new mongoose.Schema(
    {
        title:{
            type: String,
            required : true,
            unique : [true, 'Ya existe un articulo con este nombre']
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

module.exports = mongoose.model('blog', blogScheme)