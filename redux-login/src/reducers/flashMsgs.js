import { ADD_FLASH_MSG, DELETE_FLASH_MSG } from '../constants'
// 随机生成id
import shortid from 'shortid'
import findIndex from 'lodash/findIndex'
const flashMsgs = (state = [], action = {})=>{
    switch (action.type) {
        case ADD_FLASH_MSG:
            return[
                ...state,
                {
                    id:shortid.generate(),
                    type:action.message.type,
                    text:action.message.text
                }
            ]
        case DELETE_FLASH_MSG:
            // 在数组中返回当前查找元素的位置 [ 10,20,30]  20-> 1
            const index = findIndex(state,{id:action.id})
           if(index >=0 ){
            //    ...[10,20,30] ->10
            //    ...[10,20,30] ->30
            // 以上两个一组合 就成新的数组 [10,30]
            return[
                ...state.slice(0,index),
                ...state.slice(index+1)
            ]
           }
           return state
        default:
            return state;
            
       
    }
}


export default flashMsgs