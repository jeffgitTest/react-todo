var React = require("react");
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function () {
    return{
      showCompleted: false,
      searchItem: '',
      todos: TodoAPI.getTodos()
    };
  },
  handleSearch: function(showCompleted,searchItem){
    this.setState({
      showCompleted : showCompleted,
      searchItem    : searchItem.toLowerCase()
    });
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
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
    var {todos, showCompleted, searchItem} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos,showCompleted,searchItem);
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
