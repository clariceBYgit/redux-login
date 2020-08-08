react-redux 实现 登录注册功能

依赖： redux  react-redux    --save
       redux-logger redux-devtools-extension   --save-dev(开发环境的依赖)
       redux-thunk   网络请求

前端插件： classnames    bootstrap  axios   shortid   lodash






redux的调试
   1.调试流程
     Chrome浏览器需要安装插件   Redux Devtools
     安装依赖  npm install --save-dev redux-devtools-extension
     使用
        import { composeWithDevTools } from 'redux-devtools-extension'
      

        const store = createStore( rootReducer,composeWithDevTools( applyMiddleware(logger,thunk) ) )


后端环境搭建相关文档：
    安装 npm  install  --save express
    安装 npm install -g nodemon   用于持续监听node index更新



    后端插件：xampp   mysql   express   lodash   validator  body-parser




扩展： jwt   json web token 是目前最流行的跨域认证解决方案
   JWT 的几个特点
（1）JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。

（2）JWT 不加密的情况下，不能将秘密数据写入 JWT。

（3）JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。

（4）JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。

（5）JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。

（6）为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。