import React, { Component } from 'react'
import qs from 'querystring'
export default class Fetch extends Component {
    constructor(props){
        super(props)
        this.state={
            banners:[]
        }
    }
    componentDidMount(){
        // fetch基于promise
        // fetch   get请求
       fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
       .then( res => res.json() )//最终得到的json数据
       .then( data => {
        console.log(data)
        this.setState({
            banners:data.banner
        })
       })
        //    fetch  post 请求
        fetch('http://iwenwiki.com/api/blueberrypai/login.php',{
                method:"POST",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded", //响应内容类型：
                    "Accept":"application/json,text/plain,*/*"
                },
                body:qs.stringify( { //参数
                    user_id:'iwen@qq.com',
                    password:"iwen123",
                    verification_code:"crfvw"     //验证码
                })   //解析为：body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
            })
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
            })
    }
    render() {
        return (
            <div>
                <h2 style={{backgroundColor:"pink"}}>接口的地址http://iwenwiki.com/api/</h2>
                <br/>
                <h3 style={{backgroundColor:"pink"}}>Fetch的get post请求演示</h3>
                {
                    this.state.banners.length>0? this.state.banners.map((ele,index)=>{
                        return (<li key={index}>
                            <p>标题：{ele.title}</p>
                        </li>)  
                    }): <div>数据加载中。。。。。。</div>
                }
                
            </div>
        )
    }
}
