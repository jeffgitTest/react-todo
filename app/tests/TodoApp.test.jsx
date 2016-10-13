var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');

var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
  it('Should exists', ()=>{
    Expect(TodoApp).toExist();
  });

  it('should add todo to the todo state on handleAddTodo', ()=>{
    var todoText = 'sample';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    Expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
