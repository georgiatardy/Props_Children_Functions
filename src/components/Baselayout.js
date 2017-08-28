import React, { Component } from react

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

class Baselayout extends Component {
  render() {
    return (
      <div className="container">
      <Header />
      <div className="content-row"
      {this.props.children}
      </div>
      <Footer />
      </div>
    );
  }
}

export default Baselayout
