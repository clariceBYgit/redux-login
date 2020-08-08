import React, { Component } from 'react'
// import classnames from 'classnames'
import { login } from '../../actions/loginActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// 引用验空方法
import validatorInput from '../../utils/validations/login'
 class LoginForm extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            isLoading:false,
            errors:{},
            invalid:false
        }
    }
   
    onChange = (e) => {  
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    // 实现登录验证
    isValid = (e) => {
        console.log(this.state)
        const { errors, isValid } = validatorInput(this.state)
        console.log(errors)
        if(!isValid){
            this.setState({errors})
        }
        return isValid
    }
    onSubmit = (e) => {
        // 表单需要阻止默认事件
        e.preventDefault()
        if(this.isValid()){
            this.setState({
                errors:{},
                isLoading:true
            })
            this.props.login(this.state).then(
                res => this.props.history.push('/'),
                err => this.setState({
                    errors:err.response.data.errors,
                    isLoading: false
                })
            )
        }
        
    }
 
    render() {
        const { errors, isLoading, username, password } =this.state
        return (
            <form onSubmit= { this.onSubmit}>
                <h1>login登录</h1>
                {/* 密码或用户名错误的提示 */}
                { errors.form && <div className='alert alert-danger'>{errors.form}</div> }
                <div className='form-group'>
                    <label className="control-label">用户名</label>
                    <input 
                        type="text" 
                        name="username" 
                        className='form-control'
                        value={username}
                        onChange={this.onChange}
                    />
                     { errors.username && <span className='form-text text-muted'>{errors.username}</span>}
                </div>
                <div className='form-group'>
                    <label className='contorl-label'>密码</label>
                    <input 
                        type="password" 
                        name='password' 
                        value= { password} 
                        onChange={this.onChange} 
                        className='form-control' />
                    { errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>
                <div className='form-group'>
                    <button disabled={ isLoading } className='btn btn-primary btn-lg'>登录</button>
                </div>
            </form>
        )
    }
}


export default withRouter(connect(null,{ login})(LoginForm))