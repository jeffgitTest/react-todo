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
          text: 'sample data',
          completed: false
        }];
        localStorage.setItem('todos', JSON.stringify(todos));
        var getActualTodo = TodoAPI.getTodos();
        Expect(getActualTodo).toEqual(todos);
    });
  });

  describe('filterTodos', ()=>{
    var todos = [{
        id: 3,
        text: 'sample data',
        completed: true
      },
      {
        id: 4,
        text: 'new sample data',
        completed: false
      },
      {
        id: 5,
        text: 'sample data s',
        completed: true
      }
    ];

    describe('filter', ()=>{
      it('should show Completed todo when showCompleted true', ()=>{
        var filtered = TodoAPI.filterTodos(todos, true, '');
        Expect(filtered.length).toBe(3);
      });
      it('should show not Completed todo when showCompleted false', ()=>{
        var filtered = TodoAPI.filterTodos(todos, false, '');
        Expect(filtered.length).toBe(1);
      });
    });
    describe('sort',()=>{
      it('should sort filtered successful items', ()=>{
        var filtered = TodoAPI.filterTodos(todos, true, '');
        Expect(filtered[0].completed).toBe(false);
      });
    });
    describe('search',()=>{
      it('should filter todos by searchText', ()=>{
        var filtered = TodoAPI.filterTodos(todos, true, 'new');
        Expect(filtered.length).toBe(1);
      });
      it('should return all todos if searchText is empty', ()=>{
        var filtered = TodoAPI.filterTodos(todos, true, '');
        Expect(filtered.length).toBe(3);
      });
    });

  });
});
