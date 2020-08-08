import React, { Component } from 'react'
import api from '../../api'
export default class index extends Component {
    componentDidMount(){

        api.getChengpin().then(res=>res.json()).then(data=>{
            console.log({"Fetch 封装网络请求getChengpin":data})
        })

        api.postLogin({ 
                user_id:'iwen@qq.com',
                password:"iwen123",
                verification_code:"crfvw" 
            })
            .then(res=>res.json())
            .then(data=>{
            console.log({"Fetch 封装网络请求postLogin":data})
        })
    }
    render() {
        return (
            <div>
                <h3 style={{backgroundColor:"pink"}}>Fetch 封装网络请求</h3>
            </div>
        )
    }
}
