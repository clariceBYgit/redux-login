import React, { Component } from 'react'
import LoginForm from './LoginForm'
export default class index extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-4'>
                    <LoginForm />
                </div>
                <div className='col-md-3'></div>
            </div>
        )
    }
}
