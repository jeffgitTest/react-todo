var React = require('react');
var Expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('Todo', ()=>{
  it('Should exists', ()=>{
    Expect(Todo).toExist();
  });
});
