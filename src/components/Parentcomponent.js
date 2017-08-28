import React, { Component } from 'react';
import '../styles/App.css';


class ParentComponent extends Component {
  constructor(props){
    super(props);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
this.handleInput=this.handleInput.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);

  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    let whatToSay = e.target.value
    this.setState({whatToSay: this.state.whatToSay});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div className="">
      <form action="">
        <div className="form">
          <input onChange={this.handleInput} type="text" className="form" placeholder="Write Something Here" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

export default Parentcomponent
