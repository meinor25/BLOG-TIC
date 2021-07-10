const model = require('../models/comment')
const mongoose = require('mongoose')

const parseId = (id)=>{
    return mongoose.Types.ObjectId(id)
}
//GET DATA
exports.getData = (req, res)=>{
    const id = req.params.post_id
    model.find({id}, (err, docs)=>{
        res.send({
            docs
        })
    })
}
//POST DATA
exports.postData = (req, res)=>{
    const post_id = req.params.post_id
    const data = req.body
    model.create({post_id}, data, (err, docs)=>{
        if(err){
            console.log(err)
        }else{
            res.send({
                data : docs
            })
        }
    })
    
}
//UPDATE DATA 
exports.editData = (req, res)=>{
    const id = req.params.id
    const data = req.body
    model.updateOne(
        {_id : parseId(id) }, data,
        (err, docs)=>{
           if(err){
               console.log(err)
           }else{
               res.send({
                   data : docs
               })
           }
        }
    )
}