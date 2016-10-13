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

  it('should toggle completed when handle toggle called',()=>{
    var todoData = {
      id: 11,
      text: 'test item',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});
    it('should have completed items set into false',()=>{
      Expect(todoApp.state.todos[0].completed).toBe(false);
    });
    todoApp.handleToggle(11);
    it('should have changed the value of completed opposite of current value',()=>{
      Expect(todoApp.state.todos[0].completed).toBe(true);
    });

  });
});
