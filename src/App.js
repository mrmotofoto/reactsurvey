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
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handleNameSubmit(event) {
    event.preventDefault();
    var name = this.refs.name.value;
    this.setState({name: name}, function(){
      console.log(this.state);
    });
  }

  handleQuestionSubmit(event) {
    event.preventDefault();
  }

  handleQuestionChange(event){
    var answers = this.state.answers;
    if(event.target.name === 'q1') {
      answers.q1 = event.target.value;
    } else if(event.target.name === 'q2') {
      answers.q2 = event.target.value;
    } else if(event.target.name === 'q3') {
      answers.q3 = event.target.value;
    } else if(event.target.name === 'q4') {
      answers.q4 = event.target.value;
    }
    this.setState({answers:answers}, function(){
      console.log(this.state);
    });
  }

  render() {
    var user;
    var questions;
    if(this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>;
      questions = <span>
        <h3>Survey Questions</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div>
            <label>What is your favorite OS?</label><br/>
            <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange} />Windows <br />
            <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange} />Linux <br />
            <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionChange} />OSX <br />
            <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionChange} />Solaris <br />
            <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
          <div>
            <label>What is your favorite TV?</label><br/>
            <input type="radio" name="q2" value="Sony" onChange={this.handleQuestionChange} />Sony <br />
            <input type="radio" name="q2" value="Panasonic" onChange={this.handleQuestionChange} />Panasonic <br />
            <input type="radio" name="q2" value="Canon" onChange={this.handleQuestionChange} />Canon <br />
            <input type="radio" name="q2" value="Vizio" onChange={this.handleQuestionChange} />Vizio <br />
            <input type="radio" name="q2" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
          <div>
            <label>What is your favorite Smartphone?</label><br/>
            <input type="radio" name="q3" value="Android" onChange={this.handleQuestionChange} />Android <br />
            <input type="radio" name="q3" value="Iphone" onChange={this.handleQuestionChange} />Iphone <br />
            <input type="radio" name="q3" value="Google" onChange={this.handleQuestionChange} />Google <br />
            <input type="radio" name="q3" value="Tracfone" onChange={this.handleQuestionChange} />Tracfone <br />
            <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
          <div>
            <label>What is your favorite Food?</label><br/>
            <input type="radio" name="q4" value="Bacon" onChange={this.handleQuestionChange} />Bacon <br />
            <input type="radio" name="q4" value="Pizza" onChange={this.handleQuestionChange} />Pizza <br />
            <input type="radio" name="q4" value="Pasta" onChange={this.handleQuestionChange} />Pasta <br />
            <input type="radio" name="q4" value="Shrimp" onChange={this.handleQuestionChange} />Shrimp <br />
            <input type="radio" name="q4" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
        </form>
      </span>
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
      <div className="App">
        <div className="App-header text-center">
          <h2>Simple Survey</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
