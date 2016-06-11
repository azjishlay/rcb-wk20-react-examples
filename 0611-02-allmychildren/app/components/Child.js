var React = require('react');
var ReactDOM = require('react-dom');

var Grandchild = require('./Grandchild');

var Child = React.createClass({
  render: function(){

    return(
      <div className="panel panel-default">
        <div className="panel-heading">Child</div>
        <div className="panel-body">

          <h1 className="text-center">{this.props.count}</h1>
          <Grandchild count={this.props.count} />
          
        </div>
      </div>
    )
  }
});

module.exports = Child;