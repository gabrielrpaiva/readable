import * as ReadableApi from '../../utils/Api' 


export const GET_ALL_COMMENTS_BY_POST = 'GET_ALL_COMMENTS_BY_POST'
export const ADD_COMMENT_VOTE = 'ADD_COMMENT_VOTE'
export const REMOVE_COMMENT_VOTE = 'REMOVE_COMMENT_VOTE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

/* Comments by post */
export const getAllCommentsByPost = (postId) => dispatch => (
  ReadableApi.getPostComments(postId)
    .then(comments => dispatch(getCommentsByPost(comments)))
);

export const getCommentsByPost = comments => ({
  type: GET_ALL_COMMENTS_BY_POST,
  comments
});


/* Votes */ 
export const addCommentVote = (commentId) => dispatch => (
  ReadableApi.addVoteOnComment(commentId, 'upVote')
    .then(posts => dispatch(addVote(commentId)))
);

export const addVote = commentId => ({
  type: ADD_COMMENT_VOTE,
  commentId
});

export const removeVote = commentId => ({
  type: REMOVE_COMMENT_VOTE,
  commentId
});

export const removeCommentVote = (commentId) => dispatch => (
  ReadableApi.addVoteOnComment(commentId, 'downVote')
    .then(posts => dispatch(removeVote(commentId)))
);
 

 /* Insert and Update Posts */
export const addOrUpdateComments = (isNew, comment) => dispatch => (
 
  isNew ? ReadableApi.addComment(comment).then(comment => dispatch(addComments(comment))) : 
  ReadableApi.addComment(comment).then(comments => dispatch(updateComments(comment)))
);
export const addComments = comment => ({
  type: ADD_COMMENT,
  comment
});

export const updateComments = comment => ({
  type: UPDATE_COMMENT,
  comment
});


/* Delete Comment */
export const deleteComments = (commentId) => dispatch => (     
   ReadableApi.deleteComment(commentId).then(comments => dispatch(deleteComment(commentId)))
 );

 export const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  commentId
});