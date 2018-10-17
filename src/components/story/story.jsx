import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

export default class Story extends Component {
  static propTypes = {
    newsID: PropTypes.number,
  }

  state = {
    id: this.props.id,
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
    return (
      <div>
        {this.state.story.title}
      </div>
    )
  }
}
