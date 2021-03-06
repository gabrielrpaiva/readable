import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Moment from 'moment'
import { connect } from 'react-redux'
import * as PostActions from '../../reducers/Posts/PostActions'
import * as CommentActions from '../../reducers/Comments/CommentsActions'
import * as Material from 'react-icons/lib/md'
import { NavLink } from 'react-router-dom'
import { If, Then } from 'react-if'
import * as postSelectors from '../../reducers/Posts/PostsSelectors'
import * as commentsSelectors from '../../reducers/Comments/CommentsSelectors'
import Comment from '../../common/template/Comment'
import ConfigComment from './ConfigComment' 


class PostDetail extends Component {
    constructor(props) {
        super(props);

        this.state = { showNewCommentForm: false }

        const { loadAllPosts, loadAllComments, match } = this.props
        loadAllPosts()
        loadAllComments(match.params.postId)
        this.handleNewCommentForm = this.handleNewCommentForm.bind(this);

        this.addNewComment = this.addNewComment.bind(this);

        this.sendComment = this.sendComment.bind(this);

    }


    handleNewCommentForm() {

        this.setState({ showNewCommentForm: true })

    }


    addNewComment(isNew, comment) {

        this.props.addOrUpdateComment(true, comment)

        this.setState({ showNewCommentForm: false })

    }

    sendComment(isNew, comment) {

        this.props.addOrUpdateComment(isNew, comment)
    }

    render() {
        const {
            posts,
            addVote,
            removeVote,
            deletePost,
            history, 
            comments,
            addCommentVote,
            removeCommentVote,
            deleteComment,
            addOrUpdateComment
          } = this.props

        let comment = {
            author: '',
            timestamp: Date.now(),
            body: '',
            id: '',
            parentId: ''
        }
        console.log("posts.length: " + posts.id)

        return ((posts.id !== undefined)
            ? (
                <div className="container">
                    <h1>{posts.title}</h1>
                    <div className="row">
                        <div className="col text-left">
                            <p>{posts.body}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-left">
                            Author{' '}{posts.author}
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col text-left">
                            {Moment(posts.timestamp).format('MM/D/YYYY')}
                        </div>
                        <div className="col text-center">
                            {posts.voteScore}{' '}
                            Votes
            </div>
                        <div className="col text-right">
                            {posts.commentsCount}{' '}
                            Comments
            </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12">
                            <NavLink
                                key={posts.id}
                                to={`/posts/edit/${posts.id}`}
                                className='card-link'
                                title='Edit'>Edit</NavLink>

                            <button
                                className="btn btn-danger float-right"
                                onClick={(event) => {
                                    deletePost(posts.id);
                                    history.push('/')
                                }}>
                                <Material.MdRemove />{' '}
                                Delete
              </button>
                            <button
                                className="btn btn-dark float-right"
                                onClick={(event) => addVote(posts.id)}>
                                <Material.MdAdd />{' '}
                                Vote
              </button>
                            <button
                                className="btn btn-dark float-right"
                                onClick={(event) => removeVote(posts.id)}>
                                <Material.MdRemove />{' '}
                                Vote
              </button>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <br />
                        <hr />
                        <button
                            className="btn btn-dark float-right"
                            onClick={(event) => this.handleNewCommentForm()}>
                            <Material.MdAdd />{' '}
                            Add new Comment
            </button>
                        <br />
                    </div>

                    <If condition={this.state.showNewCommentForm}>
                        <Then>
                            <div>
                                <br />
                                <hr />
                                <ConfigComment
                                    sendComment={this.addNewComment}
                                    comment={comment}
                                    postId={posts.id} />
                                <hr />
                            </div>
                        </Then>
                    </If>

                    <br />
                    <div>
                        <h1>Comments</h1>

                        <div className="card-deck"> {
                            comments.map((comment) => (<Comment
                                key={comment.id}
                                comment={comment}
                                addVote={addCommentVote}
                                removeVote={removeCommentVote}
                                deleteComment={deleteComment}
                                addOrUpdateComment={addOrUpdateComment} />))
                        } </div>
                    </div>
                </div>
            )
            : (
                <div className="container">
                    <h1>Sorry! But this post no longer exist!</h1>
                </div>
            ))

    }

}

PostDetail.defaultProps = {
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

const mapStateToProps = (state, ownProps) => {
    return {
        posts: postSelectors.getPostsByIdInternal(state.PostsReducers, ownProps.match.params.postId),
        comments: commentsSelectors.commentsByPostId(state.commentsReducers, ownProps),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllPosts: () => dispatch(PostActions.getAllPostsRequest()),
        loadAllComments: (postId) => dispatch(CommentActions.getAllCommentsByPost(postId)),
        addVote: (postId) => dispatch(PostActions.addPostVote(postId)),
        removeVote: (postId) => dispatch(PostActions.removePostVote(postId)),
        deletePost: (postId) => dispatch(PostActions.deletePost(postId)),
        addCommentVote: (commentId) => dispatch(CommentActions.addCommentVote(commentId)),
        removeCommentVote: (commentId) => dispatch(CommentActions.removeCommentVote(commentId)),
        deleteComment: (commentId) => dispatch(CommentActions.deleteComments(commentId)),
        addOrUpdateComment: (isNew, comment) => dispatch(CommentActions.addOrUpdateComments(isNew, comment))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail))