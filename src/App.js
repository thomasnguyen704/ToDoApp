import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    myList:[

    ]
  }

  onClick=()=>{
    this.setState({
      myList:[...this.state.myList, "eggs"]
      }
    )
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.myList.map(val=><li>{val}</li>)}
        </ul>
        <button onClick={this.onClick}>Click Me</button>

      </div>
    );
  }
}

export default App;
