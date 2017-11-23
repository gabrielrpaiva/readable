import * as ReadableApi from '../../utils/Api'
import {API_CALL} from '../../middlewares/ApiCallerMiddleware'

/* All Posts */

export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS'
export const GET_ALL_POSTS_LOADING = 'GET_ALL_POSTS_LOADING'
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE'
export const SET_ALL_POSTS_ORDER = 'SET_ALL_POSTS_ORDER'

/**
 * Loads all Posts
 */
export const getAllPostsRequest = () => { 
  return {
    type: API_CALL,
    //shouldCallAPI: (state) => (new Date().getTime() - state.postsReducers.lastCall) >= 90000, //call again after 30 seconds
    types: [
      GET_ALL_POSTS_LOADING, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILURE
    ],
    callMethod: () => ReadableApi.getAllPosts()
  }
}