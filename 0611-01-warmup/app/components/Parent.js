var React = require('react');
var ReactDOM = require('react-dom');

var Child = require('./Child');

var Parent = React.createClass({
  render: function(){
    return(

      <div className="container">
        <div className="jumbotron">
          <h1>React warmup</h1>
          <p>Components & sub-components</p>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">Parent</div>
          <div className="panel-body">

            <Child />
            
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Parent;