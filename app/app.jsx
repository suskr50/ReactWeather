var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Example = require('Example');
var Weather = require('Weather');
var About = require('About');

// Load foundation 
require('style!css!foundation-sites/dist/foundation.min.css');

require('style!css!sass!applicationStyles');

$(document).foundation();


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="about" component={About}/>
    	<Route path="example" component={Example}/>
    	<IndexRoute component={Weather}/> 
    </Route>
  </Router>,
  document.getElementById('app')
);
