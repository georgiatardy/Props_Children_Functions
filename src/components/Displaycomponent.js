import React, { Component } from 'react';


class DisplayComponent extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-body">
            <h4 className="card-title"></h4>
            <h6 className="card-subtitle"></h6>
            <p className="card-text">{this.props.sayWhat}</p>
          </div>
        </div>
    );
  }
}

export default DisplayComponent;
