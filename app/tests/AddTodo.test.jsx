var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var ReactDOM = require('react-dom');

var AddTodo = require('AddTodo');

describe('AddTodo',()=>{
  it('should exists',()=>{
    Expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid data', ()=>{
    var todoText = 'check item';
    var spy = Expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.item.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    Expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo prop with invalid data', ()=>{
    var todoText = '';
    var spy = Expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.item.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    Expect(spy).toNotHaveBeenCalled('s');
  });
});
