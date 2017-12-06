

import { combineReducers } from 'redux'

import CategoriesReducers from '../src/reducers/Categories/CategoriesReducers'
import PostsReducers from '../src/reducers/Posts/PostsReducers'
import commentsReducers from '../src/reducers/Comments/CommentsReducers'

const MainReducers = combineReducers({ CategoriesReducers,PostsReducers,commentsReducers})

export default MainReducers