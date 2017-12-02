import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux' 
import * as PostActions from '../../reducers/Posts/PostActions'
import * as PostSelectors from '../../reducers/Posts/PostsSelectors'

class ConfigPosts extends Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div></div>
        )

    }

}


const mapDispatchToProps = (dispatch) => {
    return {
      loadAllPosts: () => dispatch(PostActions.allPostsRequest()),
      loadAllCategories: () => dispatch(allCategoriesRequest()),
      addOrUpdatePost: (isNew, post) => dispatch(PostActions.addOrUpdatePost(isNew, post))
    }
  }
  