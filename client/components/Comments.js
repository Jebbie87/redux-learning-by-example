import React from 'react'

const Comments = React.createClass({
  renderComment(comment, index) {
    return (
      <div className='comment' key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(event) {
    event.preventDefault()
  },

  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment)}
        <form ref='comment-form' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
})

export default Comments