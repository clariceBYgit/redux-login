const express = require('express')
const sqlFn = require('../mysql')
const router = express.Router()
// JWT  josn web token 
const jwt = require('jsonwebtoken')
const config = require('../config')  //随意写入的authorToken参

router.post('/',(req,res)=>{
    var sql = 'SELECT * FROM USER WHERE USERNAME=? AND PASSWORD=?'
    var arr = [req.body.username,req.body.password]
    sqlFn(sql,arr,data=>{
        if(data.length>0){
            // id  邮箱 头像等都可以加入
            const token = jwt.sign({
                id:data[0].id,
                username:data[0].username
            },config.jwtSecret)
            res.send(token)
        }else{
            res.status(401).json({ errors:{form:'用户名或密码错误'}})
        }
    })
})

module.exports = router