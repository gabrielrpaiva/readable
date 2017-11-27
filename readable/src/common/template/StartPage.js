import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { allCategoriesRequest } from '../../reducers/Categories/CategoriesActions'
import * as PostActions from '../../reducers/Posts/PostActions'
import CategoriesList from '../../common/components/Categories/CategoriesList'
import Posts from '../../common/components/Posts/Posts'

class StartPage extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { loadAllCategories, loadAllPosts } = this.props

    loadAllCategories()
    loadAllPosts()

  }

  render() {
    const {
      categories,
      posts,
      sortOrderPosts,addVote,removeVote,deletePost
    } = this.props
  
 
    return (
      <section>
        <CategoriesList categories={categories} />
        <Posts posts={posts} 
          sortOrderPosts={sortOrderPosts}   addVote={addVote}
          removeVote={removeVote} deletePost={deletePost}/>
      </section>
    )
  }

}

const mapStateToProps = state => ({ 
  categories: state.CategoriesReducers.categories,
  posts: state.PostsReducers.posts
 })

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllCategories: () => dispatch(allCategoriesRequest()),
    loadAllPosts: () => dispatch(PostActions.getAllPostsRequest()),
    sortOrderPosts: (column) => dispatch(PostActions.setAllPostsOrder(column)),
    addVote: (postId) => dispatch(PostActions.addPostVote(postId)),
    removeVote: (postId) => dispatch(PostActions.removePostVote(postId)),
    deletePost: (postId) => dispatch(PostActions.deletePost(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
