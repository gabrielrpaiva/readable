import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk' 

import postsReducers from '../reducers/Posts/PostsReducers'

const rootReducer = combineReducers({postsReducers})

const configureStore = preloadedState => createStore(rootReducer)

export default configureStore
