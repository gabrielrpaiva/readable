import * as Actions from './CommentsActions'
import reduceReducers from '../../../src/utils/reducers-util'

const allCommentsInitialState = {
  comments: [],
  isPending: false
}

/**
 * Load all comments
 * @param {*} state
 * @param {*} action
 */
const loadCommentsByPost = (state = allCommentsInitialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_COMMENTS_BY_POST_SUCCESS:
      return {
        ...state,
        comments: Object.assign([], state.comments, action.response.filter(comment => !comment.deleted && !comment.parentDeleted)),
        isPending: false
      }
    case Actions.GET_ALL_COMMENTS_BY_POST_LOADING:
      return {
        ...state,
        isPending: true
      }
    default:
      return state;
  }
}

/**
 * Handle comment votes
 * @param {*} state
 * @param {*} action
 */
const commentVotes = (state = allCommentsInitialState, action) => {
  switch (action.type) {
    case Actions.ADD_COMMENT_VOTE_SUCCESS:
      return {
        ...state,
        comments: state
          .comments
          .map((comment) => (comment.id === action.payload.commentId
            ? {
              ...comment,
              voteScore: comment.voteScore + 1
            }
            : comment)),
        isProcessingVotes: false
      }
    case Actions.ADD_COMMENT_VOTE_PROCESSING:
      return {
        ...state,
        isProcessingVotes: true
      }
    case Actions.REMOVE_COMMENT_VOTE_SUCCESS:
      return {
        ...state,
        comments: state
          .comments
          .map((comment) => (comment.id === action.payload.commentId
            ? {
              ...comment,
              voteScore: comment.voteScore - 1
            }
            : comment)),
        isProcessingVotes: false
      }
    case Actions.REMOVE_COMMENT_VOTE_PROCESSING:
      return {
        ...state,
        isProcessingVotes: true
      }
    default:
      return state;
  }
}

/**
 * Delete a comment
 * @param {*} state
 * @param {*} action
 */
const deleteComment = (state = allCommentsInitialState, action) => {
  switch (action.type) {
    case Actions.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state
          .comments
          .filter(comment => comment.id !== action.payload.commentId)
      }
    default:
      return state;
  }
}

/**
 * Add or update a Comment
 * @param {*} state
 * @param {*} action
 */
const addOrUpdateComment = (state = allCommentsInitialState, action) => {
  switch (action.type) {
    case Actions.ADD_OR_UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload.isNew
          ? [
            ...state.comments,
            action.payload.comment
          ]
          : state
            .comments
            .map(comment => comment.id === action.payload.comment.id
              ? action.payload.comment
              : comment)
      }
    default:
      return state;
  }
}

/* Merge all reducer into a single one */
const allCommentsReducer = reduceReducers(loadCommentsByPost, commentVotes, deleteComment, addOrUpdateComment)

export default allCommentsReducer

