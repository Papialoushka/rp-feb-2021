import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: '',
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log({error, errorInfo});
    this.setState({errorInfo});
  }

  render() {
    const {hasError, errorInfo} = this.state;

    if (hasError) {
      return (
        <p>It seems movies service is not available at the moment. We are fixing the issue</p>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default ErrorBoundary;
