import * as ReadableApi from '../../utils/Api' 
 
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const allCategoriesRequest = () => dispatch => (
  ReadableApi.getCategories()
    .then(data => dispatch(getAllCategories(data)))
);

export const getAllCategories = data => ({
  type: GET_ALL_CATEGORIES,
  data
});
 
 