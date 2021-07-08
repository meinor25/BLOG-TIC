const model= require('../models/blog')
//Obtener data del API
const options = {
    page: 1,
    limite: 10
}
exports.getData = (req, res)=>{
    model.paginate({},options,(err, docs) =>{
        res.send({
            items: docs
        })
    })
}

exports.postData = (req, res) =>{
    const data = req.body
    model.create(data, (err, docs)=>{
        res.send({
            data: docs
        })
    })
}