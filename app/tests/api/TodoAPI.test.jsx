var Expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
  beforeEach(function(){
    localStorage.removeItem('todos');
  });

  it('Should exists',()=>{
    Expect(TodoAPI).toExist();
  });

  describe('setTodos',()=>{
    it('should set valid todos array',()=>{
      var todos = [{
          id: 5,
          text: 'sample',
          completed: false
        }
      ];
    TodoAPI.setTodos(todos);
    var actualTodos = JSON.parse(localStorage.getItem('todos'));

    Expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array',()=>{
      var badTodos = {a:'b'};
      TodoAPI.setTodos(badTodos);

      Expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos',()=>{
    it('should return empty array for bad localStorage data',()=>{
      var getActualTodo = TodoAPI.getTodos();
      Expect(getActualTodo).toEqual([]);
    });

    it('should return todo if valid array in localStorage',()=>{
      var todos = [{
          id: 4,
          test: 'sample data',
          completed: false
        }];
        localStorage.setItem('todos', JSON.stringify(todos));
        var getActualTodo = TodoAPI.getTodos();
        Expect(getActualTodo).toEqual(todos);
    });
  });
});
