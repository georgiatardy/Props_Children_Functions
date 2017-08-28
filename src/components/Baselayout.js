import React, { Component } from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import Parentcomponent from '../components/Parentcomponent.js';
// import Childcomponent from '../components/Childcomponent.js';

class Baselayout extends Component {
  render() {
    return (
      // <Header />
      // <Parentcomponent />
      // <Childcomponent />
      // <Footer />
      <div className="container">
              <Header/>
              <div className="row justify-content-center">
                {this.props.children}
              </div>
              <Footer/>
            </div>

    );
  }
}

export default Baselayout
