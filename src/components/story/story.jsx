import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './story.css';
export default class Story extends Component {
  static propTypes = {
    story: PropTypes.object,
    ranking: PropTypes.number,
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
    return (
      <div className='story-container'>
        <div className='story-title'>
          {this.state.ranking + '. ' + story.title}
        </div>
        <div className='story-info'>
          {story.score + ' by ' + story.author}
        </div>
      </div>
    )
  }
}
