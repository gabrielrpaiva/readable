import * as ReadableApi from '../../utils/Api'
import {API_CALL} from '../../middlewares/ApiCallerMiddleware'


/* Comments by post */

export const GET_ALL_COMMENTS_BY_POST_SUCCESS = 'GET_ALL_COMMENTS_BY_POST_SUCCESS'
export const GET_ALL_COMMENTS_BY_POST_LOADING = 'GET_ALL_COMMENTS_BY_POST_LOADING'
export const GET_ALL_COMMENTS_BY_POST_FAILURE = 'GET_ALL_COMMENTS_BY_POST_FAILURE'

/**
 * All comments of a single post
 */
export const allCommentsByPostRequest = (postId) => {
  return {
    type: API_CALL,
    types: [
      GET_ALL_COMMENTS_BY_POST_LOADING, GET_ALL_COMMENTS_BY_POST_SUCCESS, GET_ALL_COMMENTS_BY_POST_FAILURE
    ],
    callMethod: () => ReadableApi.getPostComments(postId),
    payload:{
      postId
    }
  }
}

/* Votes */

export const ADD_COMMENT_VOTE_SUCCESS = 'ADD_COMMENT_VOTE_SUCCESS'
export const ADD_COMMENT_VOTE_PROCESSING = 'ADD_COMMENT_VOTE_PROCESSING'
export const ADD_COMMENT_VOTE_FAILURE = 'ADD_POST_VOTE_FAILURE'

/**
 * Adds a vote to comment
 */
export const addCommentVote = (commentId) => {
  const voteChange = 'upVote'

  return {
    type: API_CALL,
    types: [
      ADD_COMMENT_VOTE_PROCESSING, ADD_COMMENT_VOTE_SUCCESS, ADD_COMMENT_VOTE_FAILURE
    ],
    callMethod: () => ReadableApi.addVoteOnComment(commentId, voteChange),
    payload: {
      commentId,
      voteChange
    }
  }
}

export const REMOVE_COMMENT_VOTE_SUCCESS = 'REMOVE_COMMENT_VOTE_SUCCESS'
export const REMOVE_COMMENT_VOTE_PROCESSING = 'REMOVE_COMMENT_VOTE_PROCESSING'
export const REMOVE_COMMENT_VOTE_FAILURE = 'REMOVE_COMMENT_VOTE_FAILURE'

/**
 * Remove a comment from a vote
 */
export const removeCommentVote = (commentId) => {
  const voteChange = 'downVote'

  return {
    type: API_CALL,
    types: [
      REMOVE_COMMENT_VOTE_PROCESSING, REMOVE_COMMENT_VOTE_SUCCESS, REMOVE_COMMENT_VOTE_FAILURE
    ],
    callMethod: () => ReadableApi.addVoteOnComment(commentId, voteChange),
    payload: {
      commentId,
      voteChange
    }
  }
}

/* Delete Comment */

export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_PROCESSING = 'DELETE_COMMENT_PROCESSING'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

/**
 * Remove a comment
 */
export const deleteComment = (commentId) => {
  return {
    type: API_CALL,
    types: [
      DELETE_COMMENT_PROCESSING, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE
    ],
    callMethod: () => ReadableApi.deleteComment(commentId),
    payload: {
      commentId
    }
  }
}

/* Add or update comment */

export const ADD_OR_UPDATE_COMMENT_SUCCESS = 'ADD_OR_UPDATE_COMMENT_SUCCESS'
export const ADD_OR_UPDATE_COMMENT_PROCESSING = 'ADD_OR_UPDATE_COMMENT_PROCESSING'
export const ADD_OR_UPDATE_COMMENT_FAILURE = 'ADD_OR_UPDATE_COMMENT_FAILURE'

/**
 * Adds or update a single comment to a post
 */
export const addOrUpdateComment = (isNew, comment) => {
  return {
    type: API_CALL,
    types: [
      ADD_OR_UPDATE_COMMENT_PROCESSING, ADD_OR_UPDATE_COMMENT_SUCCESS, ADD_OR_UPDATE_COMMENT_FAILURE
    ],
    callMethod: () => (isNew ? ReadableApi.addComment(comment) : ReadableApi.editCommentDetails(comment.id, comment)),
    payload: {
      isNew,
      comment
    }
  }
}


