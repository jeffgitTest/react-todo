var expect  = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',()=>{
  describe('SearchTextReducers',()=>{
    it('should set search text',()=>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Test data'
      };
      var res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('ShowCompletedReducer',()=>{
    it('should show completed values gets flipped',()=>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toEqual(true);
    });
  });

  describe('TodoReducer',()=>{
    it('should add new todo',()=>{
      var action = {
        type: 'ADD_TODO',
        text: 'Say something i giving up on you'
      };

      var res = reducers.todosReducers(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should call reducer and assert completed flipped', ()=>{
      var todos =[{
        id: 1,
        completed: true,
        createdAt: 123,
        completedAt: 126
      }];

      var action = {
        type:'TOGGLE_TODO',
        id: 1
      };

      var res = reducers.todosReducers(df(todos),df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
