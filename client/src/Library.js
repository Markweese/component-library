import React, { Component } from 'react'
import axios from 'axios';

class Library extends Component {
  state = {
    tags: [],
    name: '',
    type: '',
    currentComponents: []
  };

  componentDidMount() {
    this.fetchComponents();
  }

  async fetchComponents() {
    const components = await axios.get('/api/library');
    this.setState({ currentComponents: components.data });
  }

  renderComponents() {
    return this.state.currentComponents.html;
  }

  render() {
    return (
      <div>
        <h1>All Components</h1>
        <div>
          {this.renderComponents()}
        </div>
      </div>
    )
  }
}

export default Library;
