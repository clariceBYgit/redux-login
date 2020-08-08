// 合并多个reducer

import { combineReducers } from 'redux'
import auth from './auth'
import flashMsgs from './flashMsgs'
const rootReducer = combineReducers({
    auth,
    flashMsgs
})

export default rootReducer