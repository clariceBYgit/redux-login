import React, { Component } from 'react'

export default class ProxyDemo extends Component {

    // 音乐接口：http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0

    /*
        跨域的解决：
          1.开发模式下：
             利用环境解决： react Vue常用框架 都有解决方案
                第一种：此处 
                    1) package.json 中 添加   "proxy":"http://tingapi.ting.baidu.com"    
                    2) 然后  在发送请求时  fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
                第二种：
                    1) 下载 npm install http-proxy-middleware --save
                    2)  create src/setupProxy.js
                            const { createProxyMiddleware } = require('http-proxy-middleware');

                            module.exports = function(app) {
                            app.use(
                                '/api',
                                createProxyMiddleware({
                                target: 'http://localhost:5000', //需要跨域的地址
                                changeOrigin: true,
                                })
                            );
                            };

                        组件中调用时 ：
                            fetch('/api/list')
                            .then( res => res.json()) 
                            .then( data => {
                                console.log(data)
                            })

          2.生产模式下   npm run build: 打包 -> 生产模式
             jsonp  cors iframe postMessage ...
    */  

    componentDidMount(){

        // fetch 跨域的第一种解决方案
        fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
        .then( res => res.json() )
        .then( data => {
            console.log(data)
        })
        // 失败了
        .catch( error => {
            console.log( new Error( error ))
        })


        // fetch 跨域的第二种解决方案   https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md
       /* 
       fetch('/api/list')
        .then( res => res.json()) 
        .then( data => {
            console.log(data)
        })
        */
    }

    render() {
        return (
            <div>
                 <h3 style={{backgroundColor:"pink"}}>Fetch解决跨域问题</h3>
            </div>
        )
    }
}
