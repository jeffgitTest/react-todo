var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', ()=>{
  it('Should exists', ()=>{
    Expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item',()=>{
    var todos = [
      {
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Do again'
      }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    Expect(todosComponents.length).toBe(todos.length);
  });
});
