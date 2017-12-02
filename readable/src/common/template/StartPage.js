import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { allCategoriesRequest } from '../../reducers/Categories/CategoriesActions'
import * as PostActions from '../../reducers/Posts/PostActions'
import CategoriesList from '../../common/components/Categories/CategoriesList'
import Posts from '../../common/components/Posts/Posts'
import * as postSelectors from '../../reducers/Posts/PostsSelectors'

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
      sortOrderPosts, addVote, removeVote, deletePost,currentCategory
    } = this.props
    
    return (
      <section>
        <CategoriesList categories={categories} />
        <Posts posts={posts}
          sortOrderPosts={sortOrderPosts} addVote={addVote}
          removeVote={removeVote} deletePost={deletePost} currentCategory={currentCategory} />
      </section>
    )
  }

}



const mapStateToProps = (state, ownProps) => ({
  categories: state.CategoriesReducers.categories,
  currentCategory: ownProps.match.params.category,
  posts: postSelectors.getPostsByCategory(state.PostsReducers, ownProps.match.params.category)
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
