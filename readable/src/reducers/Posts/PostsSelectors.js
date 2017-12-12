import { createSelector } from 'reselect'


export const getPostsByCategory = (postsState, category) => { 
    
    if (typeof (category) === "undefined") {

        return postsState.posts 
    }

    return postsState.posts.filter(post => post.category === category)
}

const getAllPostsInternal = (state) => {
    return state.postsReducers.posts
  }
  
  const getAllComments = (state) => {
    return state.commentsReducers.comments
  }


export const getPostsByIdInternal = (postsState, postId) => {
 
    if (postsState.posts.length === 0) {
        
                return postsState.posts 
            }


    return postsState 
      .posts
      .filter((post) => post.id === postId)[0]
  } 

  export const getPostsById = (postsState, postId) => { 
    getPostsByIdInternal(postsState, postId)
 
    }