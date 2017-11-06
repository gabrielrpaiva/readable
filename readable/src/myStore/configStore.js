import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk' 

import postsReducers from '../reducers/Posts/PostsReducers'
import categoriesReducers from '../reducers/Categories/CategoriesReducers'

const rootReducer = combineReducers({postsReducers,categoriesReducers})

const configureStore = preloadedState => createStore(rootReducer)

export default configureStore
