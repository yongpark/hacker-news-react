import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './comment.css';
export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object,
    ranking: PropTypes.number,
  }

  state = {
    comment: this.props.comment,
  }

  // componentDidMount() {
  //   let httpString = 'https://hacker-news.firebaseio.com/v0/item/' + this.state.id + '.json?print=pretty';
  //   axios.get(httpString)
  //   .then(res => {
  //     const story = res.data;
  //     this.setState({ story });
  //   });
  // }

  render() {
    const { comment } = this.state;
    console.log(comment)
    return (
      <div className='comment-container'>
        <div className='comment-header'>
          {comment.author}
        </div>
      </div>
    )
  }
}
