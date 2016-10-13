var React = require("react");

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      showCompleted: false,
      searchItem: '',
      todos: [
        {
          id: 1,
          text: 'Feed the dog'
        },
        {
          id: 2,
          text: 'Study Programming'
        },
        {
          id: 3,
          text: 'Drive back home'
        },
        {
          id: 4,
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
    alert(text);
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
