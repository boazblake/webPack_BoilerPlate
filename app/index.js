var React = require('react');
var ReactDOM = require('react-dom');

var Boilerplate = React.createClass({
	render: function() {
		return (
			<div> Hello Boilerplate! </div>
		)
	}
});

ReactDOM.render(<Boilerplate />, document.querySelector('#app'));