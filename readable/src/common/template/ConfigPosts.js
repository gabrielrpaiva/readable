import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Randomstring from 'randomstring'
import * as PostActions from '../../reducers/Posts/PostActions' 
import { allCategoriesRequest } from '../../reducers/Categories/CategoriesActions'
import * as postSelectors from '../../reducers/Posts/PostsSelectors'

class ConfigPosts extends Component {
    constructor(props) {
        super(props);

        const { posts } = this.props

        this.state = {
            id: posts.id,
            category: posts.category,
            author: posts.author,
            title: posts.title,
            body: posts.body
        }

        this.handleChange = this.handleChange.bind(this);

        this.sendPost = this.sendPost.bind(this);

    }

    componentDidMount() {
        const { loadAllCategories, loadAllPosts } = this.props

        loadAllCategories()
        loadAllPosts()

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentWillReceiveProps(nextProps) {

        let verifyNew = true;

        if (nextProps.posts.id === undefined) {
            this.setState({
                id: Randomstring.generate(), new: verifyNew,
                category: 'react', author: '', title: '', body: ''
            })

        }
        else {
            verifyNew = false
            this.setState({
                new: verifyNew,
                category: nextProps.posts.category, author: nextProps.posts.author, title: nextProps.posts.title, body: nextProps.posts.body
            })
        }

    }

    sendPost() {

        const { posts, addOrUpdatePost } = this.props
    
        addOrUpdatePost(this.state.new, {
            ...posts,
            id: this.state.id,
            category: this.state.category,
            author: this.state.author,
            title: this.state.title,
            body: this.state.body
        })

        const { history } = this.props
        history.push('/')

    }

    render() {

        const {categories, posts} = this.props
 
        return (
            <div className="container">
                <h1>Post</h1>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label htmlFor="comment">title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input
                            type="text"
                            className="form-control"
                            id="author"
                            name="author"
                            placeholder="Author"
                            value={this.state.author}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            className="form-control"
                            id="category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}>
                            {categories.map(category => <option value={category.name} key={category.name}>{category.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Body</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="body"
                            name="body"
                            rows="6"
                            placeholder="Body"
                            value={this.state.body}
                            onChange={this.handleChange} />
                    </div>

                    <button className="btn btn-primary" onClick={() => this.sendPost()}>Send</button>
                </div>

            </div>
        )

    }

}

ConfigPosts.defaultProps = {

    posts: {
        timestamp: Date.now(),
        body: '',
        author: '',
        category: 'react',
        title: '',
        voteScore: 1,
        new: true
    }
};


const mapStateToProps = (state, ownProps) => ({
    categories: state.CategoriesReducers.categories,
    posts: postSelectors.getPostsByIdInternal(state.PostsReducers, ownProps.match.params.postId)
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllPosts: () => dispatch(PostActions.getAllPostsRequest()),
        loadAllCategories: () => dispatch(allCategoriesRequest()),
        addOrUpdatePost: (isNew, post) => dispatch(PostActions.addOrUpdatePost(isNew, post))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfigPosts))