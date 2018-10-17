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
    newsIDs: [],
  }

  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
      .then(res => {
        const newsIDs = res.data.slice(0, 10)
        this.setState({ newsIDs });
    })
  }

  renderStories() {
    return this.state.newsIDs.map( newsID =>  (
      <div className='story-container'>
        <Story id={newsID} />
      </div>
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
        { this.state.newsIDs ? this.renderStories() : <div>Loading</div>}
      </div>
    )
  }
}

