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

  const orderPosts = (state = postsInitialState, action) => {
    switch (action.type) {
      case Actions.SET_ALL_POSTS_ORDER:
        return {
          ...state,
          columnForAllPosts: action.column,
          posts: state
            .posts
            .slice()
            .sort(sortBy(action.column))
        }
      default:
        return state;
    }
  }

  const postVotes = (state = postsInitialState, action) => {
    switch (action.type) {
      case Actions.ADD_POST_VOTE_SUCCESS:
        return {
          ...state,
          posts: state
            .posts
            .map((post) => (post.id === action.payload.postId
              ? {
                ...post,
                voteScore: post.voteScore + 1
              }
              : post)),
          isProcessingVotes: false
        } 
      case Actions.REMOVE_POST_VOTE_SUCCESS:
        return {
          ...state,
          posts: state
            .posts
            .map((post) => (post.id === action.payload.postId
              ? {
                ...post,
                voteScore: post.voteScore - 1
              }
              : post)),
          isProcessingVotes: false
        } 
      default:
        return state;
    }
  }

  const deletePost = (state = postsInitialState, action) => {
    switch (action.type) {
      case Actions.DELETE_POST_SUCCESS:
        return {
          ...state,
          posts: state
            .posts
            .filter(post => post.id !== action.payload.postId)
        }
      default:
        return state;
    }
  }


const allPostsReducer = reduceReducers(loadPosts, orderPosts, postVotes,deletePost)

export default allPostsReducer