import { ADD_FLASH_MSG , DELETE_FLASH_MSG} from "../constants";

export const addFlashMsg  = ( message ) => {
    return{
        type:ADD_FLASH_MSG,
        message
    }
}

export const deleteFlashMsg  = ( id ) => {
    return{
        type:DELETE_FLASH_MSG,
        id
    }
}
