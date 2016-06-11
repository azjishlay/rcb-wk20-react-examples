var React = require('react');
var ReactDOM = require('react-dom');

var Child = require('./Child');

var Parent = React.createClass({
  getInitialState: function(){
    return {
      count: 0
    }
  },
  handleClick: function(){
    console.log("You clicked a button on the parent!");
    this.setState(
      {
        count: this.state.count + 1
      }
    );
  },
  resetClick: function(){
    this.setState(
      {
        count: 0
      }
    );
  },
  render: function(){
    return(

      <div className="container">
        <div className="jumbotron">
          <h1>All my children</h1>
          <p>A tale of reactive components</p>
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handleClick}>Click here!</a> 
            <a className="btn btn-danger btn-lg" href="#" role="button" onClick={this.resetClick}>Reset</a></p>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">Parent</div>
          <div className="panel-body">

            <h1 className="text-center">{this.state.count}</h1>
            <Child count={this.state.count}/>
            
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Parent;