var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var ReactDOM = require('react-dom');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',()=>{
  it('should exists',()=>{
    Expect(TodoSearch).toExist();
  });

  it('should call on search with entered input text',()=>{
    var searchText = 'jam';
    var spy = Expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.searchItem.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchItem);

    Expect(spy).toHaveBeenCalledWith(false, 'jam');
  });

  it('should call on search with proper checked value',()=>{
    var spy = Expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    Expect(spy).toHaveBeenCalledWith(true, '');
  });
});
