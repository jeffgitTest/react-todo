var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');

var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
  it('Should exists', ()=>{
    Expect(TodoApp).toExist();
  });

  describe('handleAddTodo', ()=>{
    var todoText = 'sample';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);
    it('should add todo to the todo state on handleAddTodo', ()=>{
      Expect(todoApp.state.todos[0].text).toBe(todoText);
    });
    it('should a createdAt variable to have a valid unix timestamp', ()=>{
      Expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });
  });

  describe('toggle', ()=>{
    var todoData = {
      id: 11,
      text: 'test item',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    it('should toggle completed when handle toggle called',()=>{
      Expect(todoApp.state.todos[0].completed).toBe(false);
      // 'should have completed items set into false'
    });

    it('should have changed the value of completed opposite of current value and set completedAt to be a number',()=>{
      todoApp.handleToggle(11);
      Expect(todoApp.state.todos[0].completed).toBe(true);
      Expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should removed completedAt when completed is set to false', ()=>{
      todoApp.handleToggle(11);
      Expect(todoApp.state.todos[0].completed).toBe(false);
      Expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
  });


  // Test that when toggle from true to false, completedAt get removed
});
