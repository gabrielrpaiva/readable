import * as ReadableApi from '../../utils/Api'
import { API_CALL } from '../../middlewares/ApiCallerMiddleware'

 
export const SET_ALL_POSTS_ORDER = 'SET_ALL_POSTS_ORDER'


export const GET_ALL_POSTS = 'GET_ALL_POSTS'

/* Get Posts */
export const getAllPosts = posts => ({
  type: GET_ALL_POSTS,
  posts
});

export const getAllPostsRequest = () => dispatch => (
  ReadableApi.getAllPosts()
    .then(posts => dispatch(getAllPosts(posts)))
);


/* Order Posts */
export const setAllPostsOrder = (column) => ({ type: SET_ALL_POSTS_ORDER, column })


/* Vote Posts */
export const ADD_POST_VOTE = 'ADD_POST_VOTE'

export const addVote = postId => ({
  type: ADD_POST_VOTE,
  postId
});

export const addPostVote = (postId) => dispatch => (
  ReadableApi.addVoteOnPost(postId, 'upVote')
    .then(posts => dispatch(addVote(postId)))
);

export const REMOVE_POST_VOTE = 'REMOVE_POST_VOTE'

export const removeVote = postId => ({
  type: REMOVE_POST_VOTE,
  postId
});

export const removePostVote = (postId) => dispatch => (
  ReadableApi.addVoteOnPost(postId, 'downVote')
    .then(posts => dispatch(removeVote(postId)))
);

/* Delete Posts */
export const DELETE_POST = 'DELETE_POST'
export const sendDelete = postId => ({
  type: DELETE_POST,
  postId
});

export const deletePost = (postId) => dispatch => ( 
  ReadableApi.deletePost(postId).then(posts => dispatch(sendDelete(postId)))  
);

 /* Update Posts */
export const UPDATE_POST = 'UPDATE_POST'
export const configPost = post => ({
  type: UPDATE_POST,
  post
});

 /* Insert and Update Posts */
export const addOrUpdatePost = (isNew, post) => dispatch => (
  isNew ? ReadableApi.addPost(post) : 
  ReadableApi.editPostDetails(post.id,post).then(posts => dispatch(configPost(post)))  
);