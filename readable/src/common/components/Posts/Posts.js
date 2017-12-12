import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { If, Then } from 'react-if'
import * as Material from 'react-icons/lib/md'


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBodyPost: false,
            postId: 0
        }

        this.ctrlPostVisibility = this.ctrlPostVisibility.bind(this);



    }

    /* Function to change the classPopUp State  */
    ctrlPostVisibility = (id) => {

        /*  Change the classPopUp state, so the pop can hide */
        this.setState({ postId: this.state.postId === id ? 0 : id });

    }

    render() {

        /* Get the variables from the props */
        const { posts, sortOrderPosts, addVote, removeVote, deletePost, currentCategory } = this.props

        return (
            <div className="container">
                <h1>Showing all {currentCategory} posts</h1>
                <div className="form-group">
                    <label>Posts Order</label>
                    <select
                        className="form-control"
                        onChange={(event) => {
                            sortOrderPosts(event.target.value)
                        }}>
                        <option value="voteScore">Vote Score</option>
                        <option value="timestamp">Date</option>
                    </select>
                </div>


                {posts.map((post,index) => (
                    <div key={post.id} className="col-sm-6">
                        <div className="card" >

                            <div className="card-header">
                                <span className='float-right' style={{ paddingLeft: 151, color: '#007bff' }} onClick={(event) => this.ctrlPostVisibility(post.id)}>
                                    {this.state.postId === post.id ? <Material.MdRemove /> : <Material.MdAdd />}
                                </span>
                                <span className='float-right'>
                                    {post.category}</span>
                                <span className='float-left'>
                                    {post.author}</span>

                            </div>

                            <If condition={this.state.postId === post.id}>
                                <Then>
                                    <section>
                                        <div className="card-body">
                                            <h4 className="card-title">{post.title}</h4>
                                            <p className="card-text">{post.body}</p>
                                            <NavLink
                                                key={post.id}
                                                to={`/posts/edit/${post.id}`}
                                                className='card-link'
                                                title='Edit'>Edit</NavLink>
                                            <NavLink
                                                key={"detail" + post.id}
                                                to={`/${post.category}/${post.id}`}
                                                className='card-link'
                                                title='Details'>Details</NavLink>
                                            <button
                                                className="btn btn-danger float-right"
                                                onClick={(event) => deletePost(post.id)}>
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
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col text-left">
                                                    {post.timestamp}
                                                </div>
                                                <div className="col text-center">
                                                    {post.commentsCount}{' '}
                                                    Comments
                                             </div>
                                                <div className="col text-right">
                                                    {post.voteScore}{' '}
                                                    Votes
                                             </div>
                                            </div>
                                        </div>
                                    </section>
                                </Then>
                            </If>
                        </div>
                        <br />
                    </div>
                ))}

            </div>
        )
    }



}



export default Posts;