

import { combineReducers } from 'redux'

import CategoriesReducers from '../src/reducers/Categories/CategoriesReducers'

const MainReducers = combineReducers({ CategoriesReducers })

export default MainReducers