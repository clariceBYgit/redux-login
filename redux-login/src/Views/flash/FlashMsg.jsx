import React, { Component } from 'react'
import classnames from 'classnames'
/**
 * 成功
 * 失败
 */
export default class FlashMsg extends Component {
    Close = () =>{
        this.props.deleteFlashMsg(this.props.message.id)
    }
    render() {
        const { type, text } = this.props.message
        console.log(this.props)
        return (
            <div className={ classnames('alert',{
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            }) }>
                <button onClick={ this.Close } className='close'>&times;</button>
                { text }
            </div>
        )
    }
}
