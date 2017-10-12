<<<<<<< HEAD
import React, {Component} from 'react'
import './App.css'
import Button from 'material-ui/Button'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

class App extends Component {
  state={
    myList:[],
    isChecked: false,
  }

  onListItemClick = ()=> {
    this.setState({
      isChecked: !this.state.isChecked
=======
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox'
class App extends Component {
  state={
    myList:[]
  }
  onListItemClick=(index)=>()=>{
    this.setState({
      myList:this.state.myList.map((val, listIndex)=>{
        if(index===listIndex){
          return {...val, isChecked:!val.isChecked}
        }
        else{
          return val
        }
      })
>>>>>>> 9305a46a8b5473c69a74e1d1a74cbc9316fd2353
    })
  }
  onClick=()=>{
    this.setState({
      myList:[...this.state.myList, {
        primaryText:"eggs",
        onClick:this.onListItemClick,
        isChecked:false
      }]
    })
  }

  render() {
    return (
<<<<<<< HEAD
        <List>
          {
            this.state.myList.map((val, index)=>(
              <ListItem key={val}>
                <Checkbox checked={this.state.isChecked} onClick={this.onListItemClick} />
                <ListItemText primary={val}></ListItemText>
              </ListItem>
            ))
          }
          <Button color="primary" raised onClick={this.onClick}>Click Me</Button>
        </List>
=======
      <div>
        <List>
          {this.state.myList.map((val, index)=>(
            <ListItem key={index} onClick={val.onClick(index)}>
              <Checkbox checked={val.isChecked}/>
              <ListItemText primary={val.primaryText}/>
            </ListItem>
          ))}
        </List>
        <Button raised color="primary" onClick={this.onClick}>Click Me</Button>

      </div>
>>>>>>> 9305a46a8b5473c69a74e1d1a74cbc9316fd2353
    );
  }
}

export default App