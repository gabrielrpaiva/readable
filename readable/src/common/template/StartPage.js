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
      posts
    } = this.props
  

    return (
      <section>
        <CategoriesList categories={categories} />
        <Posts posts={posts} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
