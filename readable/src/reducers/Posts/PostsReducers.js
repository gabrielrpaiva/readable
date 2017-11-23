import * as Actions from './PostActions'
import sortBy from 'sort-by'
import reduceReducers from '../../../src/utils/reducers-util'


const postsInitialState = {
    posts: []
}

const loadPosts = (state = postsInitialState, action) => {
    switch (action.type) {
      case Actions.GET_ALL_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.response.filter(post => !post.deleted).sort(sortBy(state.columnForAllPosts))
        }
      case Actions.GET_ALL_POSTS_LOADING:
        return {
          ...state 
        }
      default:
        return state;
    }
  }


/* Merge all reducer into a single one */
const allPostsReducer = reduceReducers(loadPosts)

export default allPostsReducer