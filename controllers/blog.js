const model= require('../models/blog')
const mongoose = require('mongoose')
const parseId  = mongoose.Types.ObjectId
//Obtener data del API

exports.getData = (req, res)=>{
    model.find({},(err, docs) =>{
        res.send({
             docs
        })
    })
}

exports.postData = (req, res) =>{
    const data = req.body
    model.create(data, (err, docs)=>{
        if(err){
            console.log(err)
            res.send({
                err
            })
        }else{
            res.send({
                data: docs
            })
        }
        
    })
}

exports.getDataByID = (req, res) =>{
    const id = req.params.id
    model.findById({_id : parseId(id)}, (err, docs)=>{
        if(err){
            console.log(err)
        }else{
            res.send({
                data : docs
            })
        }
    })
}