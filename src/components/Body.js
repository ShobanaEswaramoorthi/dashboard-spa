import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
        <div className="body-container flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 pb-8">
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default Body;