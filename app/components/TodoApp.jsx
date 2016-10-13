var React = require("react");

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      showCompleted: false,
      searchItem: '',
      todos: [
        {
          id: uuid(),
          text: 'Feed the dog'
        },
        {
          id: uuid(),
          text: 'Study Programming'
        },
        {
          id: uuid(),
          text: 'Drive back home'
        },
        {
          id: uuid(),
          text: 'Sleep before 9pm'
        }
      ]
    };
  },
  handleSearch: function(showCompleted,searchItem){
    this.setState({
      showCompleted : showCompleted,
      searchItem    : searchItem.toLowerCase()
    });
  },
  handleAddTodo: function (text) {
    this.setState({
      todos:[
        ...this.state.todos,{
          id: uuid(),
          text: text
        }
      ]
    });
  },
  render: function () {
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
