import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

/*
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore( rootReducer,composeWithDevTools( applyMiddleware(logger,thunk) ) )

ReactDOM.render(
  <Provider store={store}>
    
    <App />
  </Provider>,
  document.getElementById('root')
);
*/



// redux完成signup
import { HashRouter as Router } from 'react-router-dom'
import routes from './routes'
import { NavigationBar} from './Views'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import FlashMsgList from './Views/flash/FlashMsgList'
import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './actions/loginActions'
import jwtDecode from 'jwt-decode'
const store = createStore( rootReducer,composeWithDevTools( applyMiddleware(logger,thunk) ) )

// 写入redux后，防止刷新后数据不再了
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch( setCurrentUser( jwtDecode( localStorage.jwtToken ) ) )
}

ReactDOM.render(
  <Provider store={store}>
     <Router routes={routes}>
      <NavigationBar />
      <FlashMsgList />
      {routes}
    </Router>
  </Provider>
 ,
  document.getElementById('root')
)


