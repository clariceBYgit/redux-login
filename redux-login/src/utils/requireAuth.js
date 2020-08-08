import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFlashMsg } from '../actions/flashMsg'
import { withRouter } from 'react-router-dom'

// 编写高阶函数
export default function( ComposedComponent){
    class Authenticate extends Component{
        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.addFlashMsg({
                    type:"danger",
                    text:"请先登录"
                })
                this.props.history.push('/login')
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.props.history.push('/login')
            }
        }
        render(){
            return(
                <ComposedComponent {...this.props }></ComposedComponent>
            )
        }
    }
    const mapStateToProps = (state) =>{
        return{
            isAuthenticated:state.auth.isAuthenticated
        }
    }
    return withRouter(connect(mapStateToProps,{ addFlashMsg })(Authenticate))
}