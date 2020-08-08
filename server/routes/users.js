const express = require('express')
// 使用lodash进行数据验证
// npm i --save lodash validator
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')

const router = express.Router()
const sqlFn = require('../mysql')


const validatorInput = (data) => {
    let errors = {}
    if(validator.isEmpty(data.username)){
        errors.username = '请输入用户名'
    }
    if(!validator.isEmail(data.email)){
        errors.email = '请输入邮箱'
    }
    if(validator.isEmpty(data.password)){
        errors.password = '请输入密码'
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = '请确认密码'
    }
    if(!validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = '两次密码不同'
    }
    return{
        errors,
        isVaild:isEmpty(errors)
    }
}


// 注册
router.post('/',(req,res)=>{
    // console.log(req.body)
    const { errors,isVaild } = validatorInput(req.body)
    if(isVaild){
        //
        var sql = 'INSERT INTO USER VALUES (NULL,?,?,?,?)';
        var arr = [req.body.username, req.body.email, req.body.password, req.body.passwordConfirmation]
        sqlFn(sql,arr,(data)=>{
            if(data.affectedRows){
                res.send({ success:true })
            }else{
                res.status(400).json({errors:"注册失败"})
            }
        })
    } else {
         /**
         * {
         *  username:'请输入用户名' 
         * }
         * */
        res.status(400).json(errors)
    }
})


// 前端验证用户名重复
router.get('/:username',(req,res)=>{
    var sql = "SELECT * FROM USER WHERE USERNAME=?";
    var arr = [req.params.username]
    sqlFn(sql,arr,(data)=>{
        if(data){
            res.send(data)
        }else{
            res.send({})
        }
    })
})



module.exports = router