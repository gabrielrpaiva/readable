import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from '../src/myStore/configStore'
import { Provider } from 'react-redux'
import reducers from './MainReducers' 
import {createStore,applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'  
import thunk from 'redux-thunk';

const store =  (createStore)(reducers, 
  applyMiddleware(createLogger(),thunk)
)

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
