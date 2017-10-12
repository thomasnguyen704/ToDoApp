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
    console.log(this.state)
    return (
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
    );
  }
}

export default App

