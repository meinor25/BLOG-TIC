const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')


const path = require('path')

const app = express();


//DB connect

//Local uri
// const DB_URI = "mongodb://localhost:27017/blog-tic"

//cloud uri
const DB_URI = "mongodb+srv://blogTIC_user:eJOx1uXuUspfh8Qc@ticblog.0ncyx.mongodb.net/blog-tic?retryWrites=true&w=majority"

mongoose.connect(
    DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) =>{
        if(err){
            console.log(err)
            console.log('ERROR DE CONEXION')
        }else{
            console.log('CONEXION CORRECTA')
        }
    }
)
//Settings
app.set('port', process.env.PORT || 3001);
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
app.use(require('./routes/blog'))
app.use(require('./routes/comment'))

//Public
// const history = require('connect-history-api-fallback')
// app.use(history)
app.use( express.static(path.join(__dirname, 'public')))




//Port
app.listen(app.get('port'), ()=>{
    console.log(`Listening at http://localhost:${app.get('port')}`)
})
