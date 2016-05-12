var React = require('react');
var Nav = require('./NAV');

var Main = (props) => {
	return(
		<div>
			<Nav />
			<h2> Main Compoents </h2>
			{props.children}
			</div>
		);
}



module.exports = Main;