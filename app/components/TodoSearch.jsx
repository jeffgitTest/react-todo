var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function (e) {
    var showCompleted = this.refs.showCompleted.checked;
    var searchItem = this.refs.searchItem.value;

    this.props.onSearch(showCompleted,searchItem);
  },
  render: function () {
    return(
      <div className='container__header'>
        <div>
          <input type='search' ref='searchItem' placeholder='Search to dos' onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
