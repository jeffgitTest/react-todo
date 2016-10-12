var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

//app scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p><TodoApp/></p>,
  document.getElementById('app')
);
