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
    })
  }

  onClick=()=>{
    this.setState({
      myList:[...this.state.myList, "eggs"]
      }
    )
  }

  render() {
    return (
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
    );
  }
}

export default App