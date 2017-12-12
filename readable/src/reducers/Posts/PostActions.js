import * as ReadableApi from '../../utils/Api'
import {API_CALL} from '../../middlewares/ApiCallerMiddleware'


export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS'
export const GET_ALL_POSTS_LOADING = 'GET_ALL_POSTS_LOADING'
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE'
export const SET_ALL_POSTS_ORDER = 'SET_ALL_POSTS_ORDER'


export const getAllPostsRequest = () => { 
  return {
    type: API_CALL,
    types: [
      GET_ALL_POSTS_LOADING, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILURE
    ],
    callMethod: () => ReadableApi.getAllPosts()
  }
}

export const setAllPostsOrder = (column) => ({type: SET_ALL_POSTS_ORDER, column})

export const ADD_POST_VOTE_SUCCESS = 'ADD_POST_VOTE_SUCCESS'
export const ADD_POST_VOTE_PROCESSING = 'ADD_POST_VOTE_PROCESSING'
export const ADD_POST_VOTE_FAILURE = 'ADD_POST_VOTE_FAILURE'


export const addPostVote = (postId) => {
  const voteChange = 'upVote'

  return {
    type: API_CALL,
    types: [
      ADD_POST_VOTE_PROCESSING, ADD_POST_VOTE_SUCCESS, ADD_POST_VOTE_FAILURE
    ],
    callMethod: () => ReadableApi.addVoteOnPost(postId, voteChange),
    payload: {
      postId,
      voteChange
    }
  }
}

export const REMOVE_POST_VOTE_SUCCESS = 'REMOVE_POST_VOTE_SUCCESS'
export const REMOVE_POST_VOTE_PROCESSING = 'REMOVE_POST_VOTE_PROCESSING'
export const REMOVE_POST_VOTE_FAILURE = 'REMOVE_POST_VOTE_FAILURE'


export const removePostVote = (postId) => {
  const voteChange = 'downVote'

  return {
    type: API_CALL,
    types: [
      REMOVE_POST_VOTE_PROCESSING, REMOVE_POST_VOTE_SUCCESS, REMOVE_POST_VOTE_FAILURE
    ],
    callMethod: () => ReadableApi.addVoteOnPost(postId, voteChange),
    payload: {
      postId,
      voteChange
    }
  }
}


export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_PROCESSING = 'DELETE_POST_PROCESSING'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'


export const deletePost = (postId) => {
  return {
    type: API_CALL,
    types: [
      DELETE_POST_PROCESSING, DELETE_POST_SUCCESS, DELETE_POST_FAILURE
    ],
    callMethod: () => ReadableApi.deletePost(postId),
    payload: {
      postId
    }
  }
}


export const ADD_OR_UPDATE_POST_SUCCESS = 'ADD_OR_UPDATE_POST_SUCCESS'
export const ADD_OR_UPDATE_POST_PROCESSING = 'ADD_OR_UPDATE_POST_PROCESSING'
export const ADD_OR_UPDATE_POST_FAILURE = 'ADD_OR_UPDATE_POST_FAILURE'

export const addOrUpdatePost = (isNew, post) => {
 
  return {
    type: API_CALL,
    types: [
      ADD_OR_UPDATE_POST_PROCESSING, ADD_OR_UPDATE_POST_SUCCESS, ADD_OR_UPDATE_POST_FAILURE
    ],
    callMethod: () => (isNew
      ? ReadableApi.addPost(post)
      : ReadableApi.editPostDetails(post.id, post)),
    payload: {
      post,
      isNew
    }
  }
}