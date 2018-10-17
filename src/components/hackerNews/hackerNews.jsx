import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from "axios";

import './hackerNews.css';
import image from './y18.gif';
import Story from '../story/story.jsx';
import Comment from '../comment/comment.jsx';

export default class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.showComments = this.showComments.bind(this);
  }

  state = {
    stories: [],
    comments: [],
  }

  componentDidMount() {
    setInterval(axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page`)
      .then(res => {
        const stories = res.data.hits.slice(0, 10)
        this.setState({ stories });
      }), 60000)
  }

  showComments(story) {
    const fetchLink = 'http://hn.algolia.com/api/v1/items/' + story.objectID;

    axios.get(fetchLink)
      .then(res => {
        const comments = res.data.children;
        this.setState({ comments });
      })
  }

  renderStories() {
    return this.state.stories.map( story =>  (
      <Story story={story} ranking={this.state.stories.indexOf(story) + 1} showComments={this.showComments}/>
    ))
  }

  renderComments() {
    return this.state.comments.map(comment => (
      <Comment comment={comment} />
    ))
  }

  render() {
    const { stories, comments } = this.state;

    return (
      <div className='hacker-news-container'>
        <div className='hacker-news-header'>
          <img src={image} className='ycomb-image' alt='ycomb'/>
          <span className='hacker-news-title'>
            Hacker News - Front Page
          </span>
        </div>
        <div className='story-list'>
          { stories ? this.renderStories() : <div>Loading</div>}
        </div>
        <div className='comments-list'>
          { comments.length === 0 ? null : <div className='comments-header'> Hacker News - Comments </div> }
          { comments ? this.renderComments() : <div>no comments</div>}
        </div>
      </div>
    )
  }
}

