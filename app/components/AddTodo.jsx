var React = require('react');

var AddTodo = React.createClass({
  submitHandler: function(e){
    e.preventDefault();
    var item = this.refs.item.value;
    if(item.length > 0 ){
      this.refs.item.value = '';
      this.props.onAddTodo(item);
    }else{
      this.refs.item.focus();
    }

  },
  render: function () {
    return(
      <div className='container__footer'>
        <form onSubmit={this.submitHandler}>
          <input type='text' ref='item' placeholder="What do you want to do?"/>
          <button className='button expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
