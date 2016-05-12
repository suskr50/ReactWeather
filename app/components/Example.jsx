var React = require('react');
var {Link} = require('react-router');


var Example = (prop) => {
	return(
		<div>
			<h1 className="text-center">Examples </h1>
			<p> Here are a few examples locations to try out </p>
			<ol>
			<li><Link to='/?location=Rio'>Rio,Brazile</Link></li>
			<li><Link to='/?location=Ocala'>Ocala,FL</Link></li>
			</ol>
			</div>
		);
}


module.exports = Example;
