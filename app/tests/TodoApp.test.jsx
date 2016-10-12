var Expect = require('expect');
var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
  it('Should exists', ()=>{
    Expect(TodoApp).toExist();
  });
});
