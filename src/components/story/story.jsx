import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './story.css';
export default class Story extends Component {
  static propTypes = {
    story: PropTypes.object,
    ranking: PropTypes.number,
    showCOmments: PropTypes.func,
  }

  state = {
    story: this.props.story,
    ranking: this.props.ranking,
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
    const { story } = this.state;
    const { showComments } = this.props;
    // console.log(story)
    return (
      <div className='story-container'>
        <div className='story-title' onClick={() => showComments(story)}>
          {this.state.ranking + '. ' + story.title}
        </div>
        <div className='story-info'>
          {story.points + ' by ' + story.author}
        </div>
      </div>
    )
  }
}
