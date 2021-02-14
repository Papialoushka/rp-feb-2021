import React, { Component } from 'react';

class Greeting extends React.Component {
  render() {
    return React.createElement(
      'p',
      null,
      'Hello, World!',
    )
  }
}

export default Greeting;
