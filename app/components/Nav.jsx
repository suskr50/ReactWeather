var React = require('react');
var {Link} = require('react-router');
var {IndexLink} = require('react-router');



var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    
    var location = this.refs.city.value;
    var encodedLocation = encodeURIComponent(location);

    this.refs.city.value = '';
    window.location.hash = '#/' + '?location=' + encodedLocation;

},
render: function () {
return(
<div className="top-bar">
  <div className="top-bar-left">
    <ul className="menu">
      <li className="menu-text">React Weather App</li>
      <li><IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
      <li><Link to ="/about" activeClassName="active"   activeStyle={{fontWeight: 'bold'}}>About</Link></li>
      <li><Link to ="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link></li>
    </ul>
  </div>
  <div className="top-bar-right">
    <form onSubmit = {this.onSearch}>
      <ul className="menu">
        <li>
          <input type="search" ref="city" placeholder="Search weather by city"/>
        </li>
        <li>
          <input type="submit" className="button" value="Get Weather"/>
        </li>
      </ul>
    </form>
  </div>
</div>

);
}
});

module.exports = Nav;


