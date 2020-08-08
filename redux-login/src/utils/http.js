//  get  post   封装网络请求

const qs = require('querystring')

export function httpGet( url ){
    const result = fetch( url )
    return result
}

export function httpPost( url, params){
    const result = fetch ( url, {
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded", //响应内容类型：
            "Accept":"application/json,text/plain,*/*"
        },
        body: qs.stringify( params )
        } )
    return result
}