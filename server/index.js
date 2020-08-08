const express = require('express')
const app = express()
const users = require('./routes/users')
const auth = require('./routes/auth')


const bodyParser = require('body-parser')
// nodemon   用于持续监听node index更新
const debug = require('debug')('my-application')

app.use(bodyParser.json())
app.use('/api/users',users)
app.use('/api/auth',auth)

app.listen(3300,(req,res)=>{
    // debug
    debug('服务器在3300端口启动')
})