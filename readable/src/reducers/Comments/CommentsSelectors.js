import {createSelector} from 'reselect'

const commentsByPostId = (commentsState, props) => {
  return commentsState
    .comments
    .filter((comment) => comment.parentId === props.match.params.postId)
}

export const getCommentsByPostId = createSelector([commentsByPostId], (comments) => {
  return comments
})
