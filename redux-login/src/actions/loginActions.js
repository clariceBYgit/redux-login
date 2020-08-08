import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken'

import { SET_CURREBT_USER } from '../constants'
// 用于jwt 的解密  需要安装下载
import jwtDecode from 'jwt-decode'

export const setCurrentUser = (user) =>{
    return{
        type:SET_CURREBT_USER,
        user
    }
}


export const login = (userData) => {
    return dispatch => {
        // 拿到后端的json web token 并写入 local storage中，还需要在请求头中传回去
        return axios.post('/api/auth',userData).then(res => {
            const token = res.data    //具体看数据结构
            // console.log(token)
            localStorage.setItem('jwtToken',token)
            // 使用定义的方法 在请求头中传回去 （创建方法,可以让token需要的时候通过请求头传回去） 总的主入口文件index.js  还需要引入此方法  
            setAuthorizationToken(token)
            // 存入redux 并用jwt-decode 进行解密
            dispatch( setCurrentUser( jwtDecode( token ) ) )
        })
    }
}


export const logout = () =>{
    return dispatch => {
        localStorage.removeItem('jwtToken')
        // 取消请求头的信息
        setAuthorizationToken(false)
        // 清楚掉redux中的数据
        dispatch( setCurrentUser({}) )
    }
}
