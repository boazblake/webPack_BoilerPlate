var React = require('react');
var ReactDOM = require('react-dom');
import App from "./components/App"

var Boilerplate = React.createClass({
	render: function() {
		return (
			<div> <App/> </div>
		)
	}
});

ReactDOM.render(<Boilerplate />, document.querySelector('#app'));