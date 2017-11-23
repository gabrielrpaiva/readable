import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { If, Then } from 'react-if'


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
        const { posts, addVote, removeVote, deletePost } = this.props

        return (
            <div className="container">
                <h1>See All Posts</h1>

                {/*  <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <span className='float-right' onClick={(event) => this.ctrlPostVisibility()}>
                                Algo</span>

                            <If condition={this.state.showBodyPost}>
                                <Then>
                                    <span className='float-left'>
                                        Algo Dois</span>
                                </Then>
                            </If>


                        </div>

                    </div>
                </div> */}

                {posts.map((post) => (
                    <div key={post.id} className="col-sm-6">
                        <div className="card" >

                            <div className="card-header">
                                <span className='float-right'>
                                    {post.category}</span>
                                <span className='float-left'>
                                    {post.author}</span>
                                    <span className='float-center' style={{ paddingLeft: 151, color: '#007bff'}} onClick={(event) => this.ctrlPostVisibility(post.id)}> 
                                    {this.state.postId === post.id ? "See less" : "See more"}
                                    </span>
                            </div>

                            <If condition={this.state.postId === post.id}>
                                <Then>
                                    <div className="card-body">
                                        <h4 className="card-title">{post.title}</h4>
                                        <p className="card-text">{post.body}</p>
                                        {/* <NavLinkWithIcon
                                    exact
                                    className='card-link'
                                    text='Details'
                                    icontype={< Material.MdOpenInNew />}
                                    to={`/${post.category}/${post.id}`} />
                                <NavLinkWithIcon
                                    exact
                                    className='card-link'
                                    text='Edit'
                                    icontype={< Material.MdEdit />}
                                    to={`/posts/${post.id}/edit`} /> */}
                                        <button
                                            className="btn btn-danger float-right"
                                            onClick={(event) => deletePost(post.id)}>
                                            Delete
                         </button>
                                        <button
                                            className="btn btn-dark float-right"
                                            onClick={(event) => addVote(post.id)}>
                                            Vote
                         </button>
                                        <button
                                            className="btn btn-dark float-right"
                                            onClick={(event) => removeVote(post.id)}>
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