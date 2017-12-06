import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Randomstring from 'randomstring';
 
class ConfigComment extends Component {

  constructor(props) {
    super(props);

    const {comment} = props

    this.state = {
      author: comment.author,
      body: comment.body
    }

    this.handleChange = this
      .handleChange
      .bind(this);

    this.sendComment = this
      .sendComment
      .bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  sendComment() {
    const {comment, postId} = this.props
    const isNew = comment.id === null

    this
      .props
      .sendComment(isNew, {
        ...comment,
        id: isNew
          ? Randomstring.generate()
          : comment.id,
        body: this.state.body,
        author: this.state.author,
        parentId: postId
      })

  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            className="form-control"
            id="body"
            name="body"
            placeholder="comment"
            value={this.state.body}
            onChange={this.handleChange}/>
        </div>
        <button className="btn btn-primary" onClick={() => this.sendComment()}>Send</button>
      </div>
    )
  }

}
 
ConfigComment.defaultProps = {
  comment: {
    id: null,
    timestamp: Date.now(),
    body: '',
    author: '',
    voteScore: 1
  }
};

export default ConfigComment;