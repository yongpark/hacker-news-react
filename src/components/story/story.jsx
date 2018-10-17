import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import './story.css';
export default class Story extends Component {
  static propTypes = {
    newsID: PropTypes.number,
    ranking: PropTypes.number,
  }

  state = {
    id: this.props.id,
    ranking: this.props.ranking,
    story: {},
  }

  componentDidMount() {
    let httpString = 'https://hacker-news.firebaseio.com/v0/item/' + this.state.id + '.json?print=pretty';
    axios.get(httpString)
    .then(res => {
      const story = res.data;
      this.setState({ story });
    });
  }

  render() {
    const { story } = this.state;
    return (
      <div className='story-container'>
        <div className='story-title'>
          {this.state.ranking + '. ' + story.title}
        </div>
        <div className='story-info'>
          {story.score + ' by ' + story.by}
        </div>
      </div>
    )
  }
}
