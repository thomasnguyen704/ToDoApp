import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    myList: []
  }

  add = ()=> {
    this.setState({
      myList: [...this.state.myList, 'eggs']
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.myList.map(
              (val, index)=> <li key={index}>{val}</li>
            )
          }
        </ul>
        <button onClick={this.add}>Click</button>
      </div>
    )
  }
}

export default App


/* A LIST EXAMPLE
  const myList = ['one', 'two', 'three']
  const ListItem = (props)=> <li>{props.text}</li>
  export default ()=> (
    <ul>
      {
        myList.map(
          (val)=> <ListItem text={val}/>
        )
      }
    </ul>
  )
*/