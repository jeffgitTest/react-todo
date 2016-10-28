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
});
