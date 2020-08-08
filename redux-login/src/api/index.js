import { httpGet, httpPost } from '../utils/http'
import base from './base'



const api = {
    getChengpin(){
        return httpGet( base.ownUrl + base.chengpin )
    },
    postLogin( params ){
        return httpPost ( base.ownUrl + base.Login,params)
    }
}


export default api