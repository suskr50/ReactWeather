var React = require('react');
var {Link} = require('react-router');
var {IndexLink} = require('react-router');



var Nav = () => {
	return(
		<div>
			<h2> Nav Compoents </h2>
			<IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to ="/about" activeClassName="active"   activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to ="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
			</div>
		);
};


module.exports = Nav;