import * as Actions from './Post1Action'


const postsInitialState = {
    posts: []
}

const loadPosts = (state = postsInitialState, action) => {
    switch (action.type) {
      case Actions.GET_ALL_POSTS:
        return {
          ...state,
          posts: action.response.filter(post => !post.deleted).sort(sortBy(state.columnForAllPosts))
        } 
      default:
        return state;
    }
  }