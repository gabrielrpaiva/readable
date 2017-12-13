import * as ReadableApi from '../../utils/Api'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export function getAllPostsRequest() { 
    const request = ReadableApi.getAllPosts()
     return{
          type: 'GET_ALL_POSTS',
          payload: request
     }
 }
 