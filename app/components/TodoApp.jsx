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
          text: 'Feed the dog',
          completed: true
        },
        {
          id: uuid(),
          text: 'Study Programming',
          completed: false
        },
        {
          id: uuid(),
          text: 'Drive back home',
          completed: true
        },
        {
          id: uuid(),
          text: 'Sleep before 9pm',
          completed: false
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
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo)=> {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  },
  render: function () {
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
