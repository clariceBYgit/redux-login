// 创建连接库  npm i --save mysql
const mysql = require('mysql')
// 创建连接池
var pool = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',//默认的
    password:'',
    database:'iwenuser'

})

function sqlFn(sql,arr,callback){
    pool.query( sql, arr, function(error,result) {
        if(error){
            console.log(new Error(error))
            return
        }
        callback(result)
    })
}


module.exports = sqlFn