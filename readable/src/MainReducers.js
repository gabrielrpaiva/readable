

import {combineReducers} from 'redux'

import CategoriesReducers from '../src/reducers/Categories/CategoriesReducers'

const MainReducers = combineReducers({ 
    categories: CategoriesReducers 
  })


  export default MainReducers