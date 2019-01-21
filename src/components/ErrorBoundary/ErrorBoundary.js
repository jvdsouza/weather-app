import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occured. Please refresh the page</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;
