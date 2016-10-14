var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');
var ReactDOM = require('react-dom');

var Todo = require('Todo');

describe('Todo', ()=>{
  it('Should exists', ()=>{
    Expect(Todo).toExist();
  });

  it('Should call on toggle prop with ID on click',()=>{
    var todoData = {
      id: 15,
      text: 'Sample text',
      completed: false
    }

    var spy = Expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));


    TestUtils.Simulate.click($el[0]);
    Expect(spy).toHaveBeenCalledWith(15);
  });
});
