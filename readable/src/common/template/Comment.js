import React, {Component} from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import * as Material from 'react-icons/lib/md' 
import ConfigComment from './ConfigComment'

/**
 * Shows a comment, allowing edition
 */
class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {editComment: false}

    this.controlEdition = this.controlEdition.bind(this);

    this.sendComment = this.sendComment.bind(this);
  }

  controlEdition() {

    this.setState((prevState, props) => ({
      editComment: !prevState.editComment
    }))

  }

  sendComment(isNew, comment) {
    
    this.props.addOrUpdateComment(isNew, comment)
    this.controlEdition()
  }

  render() {

    Moment.locale('en')
    const {comment, addVote, removeVote, deleteComment} = this.props
   
    return ((!this.state.editComment)
      ? (
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
                onClick={(event) => this.controlEdition()}>
                <Material.MdEdit/>{' '}
                Edit
              </button>
              <button
                className="btn btn-danger float-right"
                onClick={(event) => deleteComment(comment.id)}>
                <Material.MdRemove/>{' '}
                Delete
              </button>
              <button
                className="btn btn-dark float-right"
                onClick={(event) => addVote(comment.id)}>
                <Material.MdAdd/>{' '}
                Vote
              </button>
              <button
                className="btn btn-dark float-right"
                onClick={(event) => removeVote(comment.id)}>
                <Material.MdRemove/>{' '}
                Vote
              </button>
            </div>
          </div>
          <br/>
        </div>
      )
      : (
        <div className="container">
         <ConfigComment
            sendComment={this.sendComment}
            comment={comment}
            postId={comment.parentId}/>
          <br/> 
        </div>
      ))
  }
}
 
export default Comment;
