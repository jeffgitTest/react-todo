var React = require("react");

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return{
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
  handleAddTodo: function (text) {
    alert(text);
  },
  render: function () {
    var {todos} = this.state;
    return(
      <div>Hello
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
