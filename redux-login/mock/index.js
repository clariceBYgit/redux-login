// 跨域的第二种写法   编写一个自己的服务器

const express = require('express')
const app = express()
app.get('/api/list',(rep,res)=>{
    res.send([
        {
            name:'iwen',age:'10岁'
        }
    ])
})


app.listen(3100,()=>{
    console.log('app listening on port 3100')
})