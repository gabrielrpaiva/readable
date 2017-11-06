import { combineReducers } from 'redux'
import * as Actions from './PostActions'
import sortBy from 'sort-by'
import reduceReducers from '../../../src/utils/reducers-util'


const initialState = {
    texto: 'Texto inicial!'
}

export default (state = initialState, action) => {
    switch (action.type) {
         case 'MUDAR_TEXTO':
              return action.payload
         default:
              return state
    }
}