var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
      if($.isArray(todos)){
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
      }
  },

  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch(e){
      console.log(e);
    }

    return ($.isArray(todos)) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchItem){
    var filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return !todo.completed || showCompleted;
    });

    //filter by searchItem
    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchItem.length === 0 || text.indexOf(searchItem) > -1;
    });

    //sort todos with non-completed first
    filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0;
      }
    });
    return filteredTodos;
  }
};
