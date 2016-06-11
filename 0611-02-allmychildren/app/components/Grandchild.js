var React = require('react');
var ReactDOM = require('react-dom');



var Grandchild = React.createClass({
  render: function(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Grandchild</div>
        <div className="panel-body">

          <h1 className="text-center">{this.props.count}</h1>
          
        </div>
      </div>
    )
  }

});

module.exports = Grandchild;