import { createSelector } from 'reselect'


export const getPostsByCategory = (postsState, category) => { 

    if (typeof (category) === "undefined") {
        return postsState.posts 
    }

    return postsState.posts.filter(post => post.category === category)
}