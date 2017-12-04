import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'


class Comments extends Component {
    constructor(props) {
        super(props);


    }


    render() {

        return (
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header">
                        <span>
                            {comment.author}
                        </span>
                        <span>
                            {' '}{Moment(comment.timestamp).format('MM/D/YYYY')}
                        </span>
                        <span className='float-right'>
                            {comment.voteScore}
                            {' '}
                            Votes
              </span>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{comment.body}</p>
                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-dark float-left"
                            onClick={(event) => this.chageEditionMode()}>
                            <Material.MdEdit />{' '}
                            Edit
              </button>
                        <button
                            className="btn btn-danger float-right"
                            onClick={(event) => deleteComment(comment.id)}>
                            <Material.MdRemove />{' '}
                            Delete
              </button>
                        <button
                            className="btn btn-dark float-right"
                            onClick={(event) => addVote(comment.id)}>
                            <Material.MdAdd />{' '}
                            Vote
              </button>
                        <button
                            className="btn btn-dark float-right"
                            onClick={(event) => removeVote(comment.id)}>
                            <Material.MdRemove />{' '}
                            Vote
              </button>
                    </div>
                </div>
                <br />
            </div>
        )

    }

}