const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://addis:addis@mern.aud7tl8.mongodb.net/test' 
var cors = require('cors')
// const musicRouter = require('./router/musics')

const app = express();
    
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
const bodyParser = require('body-parser')

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
const musicRouter = require('./routes/musics')
app.use('/musics',musicRouter)

app.listen(9000, () => {
    console.log('Server started')
})