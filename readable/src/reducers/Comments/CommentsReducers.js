import * as Actions from './CommentsActions'
import reduceReducers from '../../../src/utils/reducers-util'

const commentsInitialState = {
  comments: [],
  isPending: false
}
 

/**
 * Get  comments
 */
const getCommentsByPost = (state = commentsInitialState, action) => {

  switch (action.type) {
    case Actions.GET_ALL_COMMENTS_BY_POST:
      return {
        ...state,
        comments: Object.assign([], state.comments, action.comments.filter(comment => !comment.deleted && !comment.parentDeleted)),
        isPending: false
      } 
    default:
      return state;
  }
}


/**
 * Vote a comment
 */
const commentVotes = (state = commentsInitialState, action) => {  
  switch (action.type) {
    case Actions.ADD_COMMENT_VOTE:
    return {
      ...state,
      comments: state.comments.map((comment) => (comment.id === action.commentId ? {
            ...comment,
            voteScore: comment.voteScore + 1
          }
          : comment))
    }  
    case Actions.REMOVE_COMMENT_VOTE:
      return {
        ...state,
        comments: state.comments.map((comment) => (comment.id === action.commentId ? {
              ...comment,
              voteScore: comment.voteScore - 1
            }
            : comment))
      } 
    default:
      return state;
  }
}
 

/**
 * Delete a comment
 */
const deleteComment = (state = commentsInitialState, action) => {
  switch (action.type) {
    case Actions.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.commentId)
      }
    default:
      return state;
  }
}


/**
 * Add or update a comment
 */
const addOrUpdateComment = (state = commentsInitialState, action) => {
  switch (action.type) {
    case Actions.ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment
        ]
      }
      case Actions.UPDATE_COMMENT:
      return {
        ...state,
        comments:  state.comments.map((comment) => (comment.id === action.comment.id ? 
          action.comment           
        : comment))
      }
    default:
      return state;
  }
}


/* Merge all reducer into a single one */
const allCommentsReducer = reduceReducers(getCommentsByPost, commentVotes, deleteComment, addOrUpdateComment)

export default allCommentsReducer

