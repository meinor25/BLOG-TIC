const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.use(morgan('tiny'))


//Routes


//Public
app.use(express.static(path.join(__dirname, 'public')))


//Port
app.listen(app.get('port'), ()=>{
    console.log(`Listening at http://localhost:${app.get('port')}`)
})
