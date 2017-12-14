import * as Actions from './CategoriesActions'


const categoriesInitialState = {
  categories: []
}

 
const getCategories = (state = categoriesInitialState, action) => {
 
  switch (action.type) {

    case Actions.GET_ALL_CATEGORIES:

      return {
        ...state, 
        categories: action.data.categories
      }
    default:
      return state;
  }
}

export default getCategories