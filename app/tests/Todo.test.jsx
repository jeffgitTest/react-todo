var Expect = require('expect');
var Todo = require('Todo');

describe('Todo', ()=>{
  it('Should exists', ()=>{
    Expect(Todo).toExist();
  });
});
