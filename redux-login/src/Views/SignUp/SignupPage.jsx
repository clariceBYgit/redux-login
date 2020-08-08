import React, { Component } from 'react'

import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupActions'
import * as flashMsgActions from '../../actions/flashMsg'


 class index extends Component {
    render() {
        return (
            <div className='row'> 
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <SignupForm 
                    flashMsgActions={this.props.flashMsgActions} 
                    signupActions={this.props.signupActions}>

                </SignupForm>
            </div>
            <div className='col-md-3'></div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signupActions:bindActionCreators(signupActions,dispatch),
        flashMsgActions:bindActionCreators(flashMsgActions,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(index)