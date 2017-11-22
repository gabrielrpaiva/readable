import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from '../src/myStore/configStore'
import { Provider } from 'react-redux'
import reducers from './MainReducers'
import ApiCallerMiddleware from '../src/middlewares/ApiCallerMiddleware'
import {createStore,applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'

 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//const store = configureStores()
const store =  (createStore)(reducers,composeEnhancers(
  applyMiddleware(ApiCallerMiddleware,createLogger())
))

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
