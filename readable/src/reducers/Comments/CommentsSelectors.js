import {createSelector} from 'reselect'

export const commentsByPostId = (commentsState, props) => {  
  return commentsState
    .comments
    .filter((comment) => comment.parentId === props.match.params.postId)
}
 
