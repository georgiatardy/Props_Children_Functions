import React, { Component } from 'react';


class ChildComponent extends Component {
  render() {
    return (
      <button type="submit" className="submit_button"
      onClick={this.props.onClick}>Submit</button>


    );
  }
}

export default ChildComponent
