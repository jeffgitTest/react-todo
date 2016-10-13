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
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' ref='item'/>
          <button>Insert</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
