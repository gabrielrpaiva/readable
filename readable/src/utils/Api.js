const api = "http://localhost:3000"

// Generate a unique token for Authorization
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

/* Get all of the categories available for the app. List is found in categories.js */
export const getCategories = () => fetch(`${api}/categories`, {
  method: 'GET',
  headers: {
    ...headers
  }
}).then(res => res.json())

/* Get all of the posts for a particular category. */
export const getPostsByCategory = (category) => fetch(`${api}/${category}/posts`, {
  method: 'GET',
  headers: {
    ...headers
  }
}).then(res => res.json())

/* Get all of the posts. Useful for the main page when no category is selected. */
export const getAllPosts = () => fetch(`${api}/posts`, {
  method: 'GET',
  headers: {
    ...headers
  }
}).then(res => res.json())

/* Add a new post. */
export const addPost = (post) => fetch(`${api}/posts`, {
  method: 'POST',
  headers: {
    ...headers
  },
  body: JSON.stringify(post)
}).then(res => res.json())

/* Get the details of a single post. */
export const getPostById = (postId) => fetch(`${api}/posts/${postId}`, {
  method: 'GET',
  headers: {
    ...headers
  }
}).then(res => res.json())

/* Used for voting on a post. option - [String]: Either "upVote" or "downVote" */
export const addVoteOnPost = (postId, option) => fetch(`${api}/posts/${postId}`, {
  method: 'POST',
  headers: {
    ...headers
  },
  body: JSON.stringify({option})
}).then(res => res.json())

/* Used for voting on a post. title - [String] body - [String] */
export const editPostDetails = (postId, details) => fetch(`${api}/posts/${postId}`, {
  method: 'PUT',
  headers: {
    ...headers
  },
  body: JSON.stringify(details)
}).then(res => res.json())

/* Sets the deleted flag for a post to 'true'. */
export const deletePost = (postId) => fetch(`${api}/posts/${postId}`, {
  method: 'DELETE',
  headers: {
    ...headers
  }
}).then(res => res.json())

/* 	Get all the comments for a single post. */
export const getPostComments = (postId) => fetch(`${api}/posts/${postId}/comments`, {
  method: 'GET',
  headers: {
    ...headers
  }
}).then(res => res.json())

/* Add a comment to a post. */
export const addComment = (comment) => fetch(`${api}/comments`, {
  method: 'POST',
  headers: {
    ...headers
  },
  body: JSON.stringify(comment)
}).then(res => res.json())

/* Get the details for a single comment. */
export const getCommentDetails = (commentId) => fetch(`${api}/comments/${commentId}`, {
  method: 'GET',
  headers: {
    ...headers
  }
}).then(res => res.json())

/* Used for voting on a comment. */
export const addVoteOnComment = (commentId, option) => fetch(`${api}/comments/${commentId}`, {
  method: 'POST',
  headers: {
    ...headers
  },
  body: JSON.stringify({option})
}).then(res => res.json())

/* Edit the details of an existing comment. */
export const editCommentDetails = (commentId, details) => fetch(`${api}/comments/${commentId}`, {
  method: 'PUT',
  headers: {
    ...headers
  },
  body: JSON.stringify({details})
}).then(res => res.json())

/* Sets a comment's deleted flag to true. */
export const deleteComment = (commentId) => fetch(`${api}/comments/${commentId}`, {
  method: 'DELETE',
  headers: {
    ...headers
  }
}).then(res => res.json())
