import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'