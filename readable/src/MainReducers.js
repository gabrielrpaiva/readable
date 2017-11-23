

import { combineReducers } from 'redux'

import CategoriesReducers from '../src/reducers/Categories/CategoriesReducers'
import PostsReducers from '../src/reducers/Posts/PostsReducers'

const MainReducers = combineReducers({ CategoriesReducers,PostsReducers})

export default MainReducers