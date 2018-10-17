import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from "axios";

import './hackerNews.css';
import image from './y18.gif';
import Story from '../story/story.jsx';

export default class HackerNews extends Component {
  // static propTypes = {

  // }

  state = {
    stories: [],
  }

  componentDidMount() {
    axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page`)
      .then(res => {
        const stories = res.data.hits.slice(0, 10)
        this.setState({ stories });
    })
  }

  renderStories() {
    return this.state.stories.map( story =>  (
      <Story story={story} ranking={this.state.stories.indexOf(story) + 1}/>
    ))
  }

  render() {
    return (
      <div className='hacker-news-container'>
        <div className='hacker-news-header'>
          <img src={image} className='ycomb-image' alt='ycomb'/>
          <span className='hacker-news-title'>
            Hacker News - Front Page
          </span>
        </div>
        <div className='story-list'>
          { this.state.stories ? this.renderStories() : <div>Loading</div>}
        </div>
      </div>
    )
  }
}

