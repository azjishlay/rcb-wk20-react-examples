var React = require('react');
var ReactDOM = require('react-dom');



var Grandchild = React.createClass({
  render: function(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Grandchild</div>
        <div className="panel-body">

          Some content here
          
        </div>
      </div>
    )
  }

});

module.exports = Grandchild;