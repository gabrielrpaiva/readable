import * as Actions from './CategoriesActions'


const initialState = {
  categories: [],
  isPending: false,
  lastCall: 0
}

/**
 * Reducer for that handles the list of categories
 * @param {*} state
 * @param {*} action
 */
const allCategoriesReducer = (state = initialState, action) => {

  switch (action.type) {
    case Actions.GET_ALL_CATEGORIES_SUCCESS:

      return {
        ...state, 
        categories: action.response.categories,
        isPending: false,
        lastCall: action.lastCall
      }
    case Actions.GET_ALL_CATEGORIES_LOADING:
      return {
        ...state,
        isPending: true
      }
    default:
      return state;
  }
}

export default allCategoriesReducer