import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    myList:[]
  }
  spoof=()=>{
    
    this.setState({
      myList:[...this.state.myList, "eggs"]
    })
  }
  deleteItem=(value)=>{
    this.setState({
      myList:this.state.myList.filter(val=>value!==val)
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <ul>
          {this.state.myList.map((val, index)=><li key={index}>{val}</li>)}
        </ul>
        <button onClick={this.spoof}>Click me</button>
      </div>
    );
  }
}

export default App

