import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: '',
      answers: {
        q1:'',
        q2:'',
        q3:'',
        q4:''
      },
      submitted:false
    }
  }

  handleNameSubmit(event) {
    event.preventDefault();
    var name = this.refs.name.value;
    this.setState({name: name}, function(){
      console.log(this.state);
    });
  }

  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>
    } else if(!this.state.name && this.state.submitted === false) {
      user = <span>
        <h2>Please enter name to begin</h2>
        <form onSubmit={this.handleNameSubmit.bind(this)}>
          <input type="text" placeholder="Enter Name...." ref="name"/>
        </form>
      </span>
      questions = '';
    } else if(this.state.submitted === true){

    }
    return (
      <div className="App text-center">
        <div className="App-header">
          <h2>Simple Survey</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
      </div>
    );
  }
}

export default App;
