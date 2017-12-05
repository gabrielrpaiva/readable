import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Moment from 'moment'
import { connect } from 'react-redux'
import * as PostActions from '../../reducers/Posts/PostActions'
import * as Material from 'react-icons/lib/md'
import { NavLink } from 'react-router-dom'
import { If, Then } from 'react-if'
import * as postSelectors from '../../reducers/Posts/PostsSelectors'


class PostDetail extends Component {
    constructor(props) {
        super(props);

        this.handleNewCommentForm = this
            .handleNewCommentForm
            .bind(this);

        this.addNewComment = this
            .addNewComment
            .bind(this);

    }


    handleNewCommentForm() {

        this.setState({ showNewCommentForm: true })

    }


    addNewComment(isNew, comment) {

        this
            .props
            .addOrUpdateComment(isNew, comment)

        this.setState({ showNewCommentForm: false })

    }

    render() {
        const {
            post,
            addVote,
            removeVote,
            deletePost,
            history,
            isPostsLoading,
            comments,
            addCommentVote,
            removeCommentVote,
            deleteComment,
            addOrUpdateComment
          } = this.props

        return (
            <div className="container">
                <h1>{post.title}</h1>
                <div className="row">
                    <div className="col text-left">
                        <p>{post.body}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-left">
                        Author{' '}{post.author}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col text-left">
                        {Moment(post.timestamp).format('MM/D/YYYY')}
                    </div>
                    <div className="col text-center">
                        {post.voteScore}{' '}
                        Votes
            </div>
                    <div className="col text-right">
                        {post.commentsCount}{' '}
                        Comments
            </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-12">
                        <NavLink
                            key={post.id}
                            t to={`/posts/edit/${post.id}`}
                            className='card-link'
                            title='Edit'>Edit</NavLink>
                        {/*          <NavLinkWithIcon
                exact
                className='card-link'
                text='Edit'
                icontype={< Material.MdEdit />}
                to={`/posts/${post.id}/edit`}/> */}
                        <button
                            className="btn btn-danger float-right"
                            onClick={(event) => {
                                deletePost(post.id);
                                history.push('/')
                            }}>
                            <Material.MdRemove />{' '}
                            Delete
              </button>
                        <button
                            className="btn btn-dark float-right"
                            onClick={(event) => addVote(post.id)}>
                            <Material.MdAdd />{' '}
                            Vote
              </button>
                        <button
                            className="btn btn-dark float-right"
                            onClick={(event) => removeVote(post.id)}>
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
                           {/*  <CreateOrEditComment sendComment={this.addNewComment} postId={post.id} /> */}
                            <hr />
                        </div>
                    </Then>
                </If>

                <br />
            {/*     <CommentsList
                    comments={comments}
                    isLoading={isPostsLoading}
                    addVote={addCommentVote}
                    removeVote={removeCommentVote}
                    deleteComment={deleteComment}
                    addOrUpdateComment={addOrUpdateComment} /> */}
            </div>
        )

    }

}

PostDetail.defaultProps = {
    post: null
};

const mapStateToProps = (state, ownProps) => {
    return {
        post: postSelectors.getPostsByIdInternal(state, ownProps),
        // comments: CommentsSelectors.getCommentsByPostId(state.commentsReducers, ownProps),
        isPostsLoading: state.postsReducers.isPending,
        //isCommentsLoading: state.commentsReducers.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllPosts: () => dispatch(PostActions.getAllPostsRequest()),
        //  loadAllComments: (postId) => dispatch(CommentActions.allCommentsByPostRequest(postId)),
        addVote: (postId) => dispatch(PostActions.addPostVote(postId)),
        removeVote: (postId) => dispatch(PostActions.removePostVote(postId)),
        deletePost: (postId) => dispatch(PostActions.deletePost(postId)),
        // addCommentVote: (commentId) => dispatch(CommentActions.addCommentVote(commentId)),
        // removeCommentVote: (commentId) => dispatch(CommentActions.removeCommentVote(commentId)),
        // deleteComment: (commentId) => dispatch(CommentActions.deleteComment(commentId)),
        // addOrUpdateComment: (isNew, comment) => dispatch(CommentActions.addOrUpdateComment(isNew, comment))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail))