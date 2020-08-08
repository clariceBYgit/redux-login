// 路由页面

import React  from 'react'
import { SignupPage, LoginPage, ShopPage } from './Views'

import App from './App'
import { Route } from 'react-router-dom'
// 引入登录认证（高阶函数）
import requireAuth from './utils/requireAuth'

export default (
    <div className='container'>
        <Route exact path='/' component={App}></Route>
        <Route path='/signup' component={SignupPage}></Route>
        <Route path='/login' component={LoginPage}></Route>
        <Route path='/shop' component={ requireAuth(ShopPage) }></Route>
    </div>
)