import axios from 'axios';
import React, { Component } from 'react';

export default class TodoItems extends Component {
  state = {
    childName: "",
    days: "",
    missionName: "",
    parentReward: "",
    points: ""
  }


  handleSubmit = e => {
    e.preventDefault();

    axios.post('/api/parent', this.state);
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input name="childName" value={this.state.childName} onChange={this.handleChange} placeholder="child name" />
        <input name="days" value={this.state.days} onChange={this.handleChange} placeholder="days" />
        <input name="missionName" value={this.state.name} onChange={this.handleChange} placeholder="mission name" />
        <input name="parentReward" value={this.state.parentRewards} onChange={this.handleChange} placeholder="rewards" />
        <input name="points" value={this.state.points} onChange={this.handleChange} placeholder="points" />
        <button>Submit</button>
      </form>
      </div>
    );
  }
}

// class TodoItems {
//   state = {
//     childName: "",
//     parentReward: "",
//     missions: [] 
//   };

//   createTasks(item) {
//     return <li key={item._id}>{item.text}</li>
//   }

//   render() {
//     return (
// <div className="Missions">
//                 <div className="task1">
//                   <form onSubmit={this.addItem}>
//                     <input ref={(a) => this._inputElement = a}
//                            placeholder="enter task">
//                     </input>
//                     <button

//                 </div>
//                 <TodoItems entries={this.state.items}/>
//               </div>
//     );
//   }
// }
/*
var TodoItems = React.createClass({
  render: function() {
     var todoEntries = this.props.entries;
 
    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }
 
    var listItems = todoEntries.map(createTasks);
 

           return (
              
            );
          }
            }
          });



var TodoList = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
 addItem: function(e) {
  var itemArray = this.state.items;
 
  itemArray.push(
    {
      text: this._inputElement.value,
      key: Date.now()
    }
  );
 
  this.setState({
    items: itemArray
  });
 
  this._inputElement.value = "";
 
  e.preventDefault();
}
 
  render: function() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                   placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
});

 return (
      <ul className="theList">
        {listItems}
      </ul>
    );
    */