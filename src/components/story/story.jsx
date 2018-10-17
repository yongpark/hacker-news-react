import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Story extends Component {
  static propTypes = {
    newsID: PropTypes.number,
  }

  state = {
    id: this.props.id
  }

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    console.log(this.props);
    return (
      <div>
        test story
      </div>
    )
  }
}
