import { SET_CURREBT_USER } from '../constants'
import isEmpty from 'lodash/isEmpty'

const initialState = {
    isAuthenticated: false , //判断用户是否登录
    user: {}
}

const auth = (state = initialState, action) => {
    switch (action.type) {

    case SET_CURREBT_USER:
        return { 
            isAuthenticated:!isEmpty(action.user),
            user:action.user
        }

    default:
        return state
    }
}

export default auth