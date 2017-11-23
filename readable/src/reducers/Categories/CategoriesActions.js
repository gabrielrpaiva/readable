import * as ReadableApi from '../../utils/Api'
import {API_CALL} from '../../middlewares/ApiCallerMiddleware'

export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS'
export const GET_ALL_CATEGORIES_LOADING = 'GET_ALL_CATEGORIES_LOADING'
export const GET_ALL_CATEGORIES_FAILURE = 'GET_ALL_CATEGORIES_FAILURE'

/* All Categories */

/**
 * Loads all categories
 */
export const allCategoriesRequest = () => {
  return {  
    type: API_CALL, 
    types: [
      GET_ALL_CATEGORIES_LOADING, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILURE
    ],
    callMethod: () => ReadableApi.getCategories()
  }
}
 