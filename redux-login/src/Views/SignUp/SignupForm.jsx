import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
// import classnames from 'classnames'
class index extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            isLoading:false,
            errors:{},
            invalid:false
        }
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e)=>{
        // 此处必须阻止默认事件，否则会变跳转
        e.preventDefault()
        this.setState({
            isLoading:true,
            errors:{}
        })
        // console.log(this.state)
        // 发送网络请求
        this.props.signupActions.userSignupReq(this.state).then(
            ()=>{
                // 注册成功跳转回登录
                this.props.flashMsgActions.addFlashMsg({
                    type:'success',
                    text:'注册成功，欢迎您加入'
                })
                this.props.history.push('/')
               
            },
            ({response})=>{
                // console.log(response.data) //错误时响应回来的数据
                this.setState({
                    errors:response.data,
                    isLoading:false
                })
            }
        )
    }
    // 用户名失去焦点验证是否已经存在数据库 onBlur

    checkUserExists = (e) =>{
        const field = e.target.name
        const val = e.target.value
        let invalid
        if(val !== ""){
            // 网络请求
            this.props.signupActions.isUserExists(val).then(res=>{
                let errors = this.state.errors
                if(res.data[0]){
                    errors[field] = '用户名存在:' + val
                    invalid = true
                }else{
                    errors[field] = ''
                    invalid = false
                }
                this.setState({
                    
                    errors,
                    invalid
                })
            })
        }

    }
    render() {
        const { errors,isLoading,invalid, username, password, email, passwordConfirmation } = this.state
        // console.log(errors)
        return (
            <form onSubmit={  this.onSubmit}>
                <h1>join us</h1>
               
                <div className='form-group'>
                    <label className='contorl-label'>Username</label>
                    <input type="text" name='username' value= { username} onChange={this.onChange} onBlur={ this.checkUserExists } className='form-control'
                    //  className={ classnames('form-control',{ 'is-invalid':errors.username })}
                    />
                    { errors.username && <span className='form-text text-muted'>{errors.username}</span>}
                </div>
                <div className='form-group'>
                    <label className='contorl-label'>email</label>
                    <input type="email" name='email' value= { email} onChange={this.onChange} className='form-control' />
                    { errors.email && <span className='form-text text-muted'>{errors.email}</span>}
                </div>
                <div className='form-group'>
                    <label className='contorl-label'>password</label>
                    <input type="password" name='password' value= { password} onChange={this.onChange} className='form-control' />
                    { errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>
                <div className='form-group'>
                    <label className='contorl-label'>passwordConfirmation</label>
                    <input type="password" name='passwordConfirmation' value= { passwordConfirmation} onChange={this.onChange} className='form-control' />
                    { errors.passwordConfirmation && <span className='form-text text-muted'>{errors.passwordConfirmation}</span>}
                </div>
                <div className='form-group'>
                    <button disabled={ isLoading || invalid } className='btn btn-primary btn-lg'>注册</button>
                </div>
            </form>
        )
    }
}

export default  withRouter(index)