import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/loginActions'

class index extends Component {
    logout = (e) => {
        e.preventDefault()
        this.props.logout()
    }
    render() {
        const { isAuthenticated } = this.props.auth
        const userList = (
            <ul className="nav nav-pills">
                <li role="presentation">
                    <a className='nav-link' onClick={ this.logout }>退出登录</a>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="nav nav-pills">
                   
                <li role="presentation">
                    <Link to="/signup">注册</Link>
                </li>
                <li role="presentation">
                    <Link to="/login">登录</Link>
                </li>
           
            </ul>
        )
        return (
            <div className='container'>
                 <div className='container'>
                     <h3>
                        <Link to="/">Login功能</Link>
                     </h3>
                 </div>
               { isAuthenticated ? userList : guestLinks }
            </div>
        )
    }
}


const mapStateToProps = ( state ) =>{
    return{
        auth:state.auth
    }
}

export default connect(mapStateToProps, {logout})(index)