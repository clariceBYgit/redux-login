import React, { Component } from 'react'
import FlashMsg  from './FlashMsg'
import { connect }  from 'react-redux'
import {deleteFlashMsg} from '../../actions/flashMsg'
 class FlashMsgList extends Component {
    //  message是一个数组，需要遍历
    render() {
        const messages = this.props.messages.map(message=>
           <FlashMsg key={message.id} message={message} deleteFlashMsg={this.props.deleteFlashMsg}></FlashMsg>
        )
        return (
            <div className='container'>
                {messages}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        messages:state.flashMsgs
    }
}
export default connect(mapStateToProps,{deleteFlashMsg})(FlashMsgList)