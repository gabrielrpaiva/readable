import * as Actions from './PostActions'
import sortBy from 'sort-by'
import reduceReducers from '../../../src/utils/reducers-util'


const postsInitialState = {
    posts: []
}


  const getPosts = (state = postsInitialState, action) => {
 
    switch (action.type) {
      case Actions.GET_ALL_POSTS:
        return {
          ...state,
          posts: action.posts.filter(post => !post.deleted).sort(sortBy(state.columnForAllPosts))
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
      case Actions.ADD_POST_VOTE:
      return {
        ...state,
        posts: state.posts.map((post) => (post.id === action.postId ? {
              ...post,
              voteScore: post.voteScore + 1
            }
            : post))
      }  
      case Actions.REMOVE_POST_VOTE:
        return {
          ...state,
          posts: state.posts.map((post) => (post.id === action.postId ? {
                ...post,
                voteScore: post.voteScore - 1
              }
              : post))
        } 
      default:
        return state;
    }
  }


  const updatePost = (state = postsInitialState, action) => {   
    switch (action.type) {
      case Actions.UPDATE_POST:
        return {
          ...state,
          posts: state.posts.map((post) => (post.id === action.post.id ? 
            action.post           
          : post))
        }
      default:
        return state;
    }
  }



  const deletePost = (state = postsInitialState, action) => {
    switch (action.type) {
      case Actions.DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.postId)
        }
      default:
        return state;
    }
  }


const allPostsReducer = reduceReducers(getPosts, orderPosts, postVotes,updatePost,deletePost)

export default allPostsReducer