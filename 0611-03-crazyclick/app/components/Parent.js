var React = require('react');
var ReactDOM = require('react-dom');
var helpers = require('../utils/helpers');


var Parent = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0
    }
  },
  handleClick: function(){
    console.log("You clicked a button on the parent!");
    this.setState({
      clicks: this.state.clicks + 1
    });
  },
  render: function(){
    return(

      <div className="container">
        <div className="jumbotron">
          <h1>Hey you, click this button!</h1>
          <p>I do crazy things</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handleClick}>Click here!</a></p>
        </div>

        <div>
          <Rndmr    clicks={this.state.clicks} />
          <Addr     clicks={this.state.clicks} />
          <Multplr  clicks={this.state.clicks} />
          <Imgr     clicks={this.state.clicks} />
        </div>
      </div>
    )
  }
});

var Rndmr = React.createClass({
  getInitialState: function(){
    return {
      randomNumber: 0
    }
  },
  getRandomNumber: function(){
    var randomNumber = Math.floor(Math.random() * 999999);
    this.setState({
      randomNumber: randomNumber
    });
  },
  componentWillReceiveProps: function() {
    console.log('Rndmr received clicks');
    this.getRandomNumber();
  },
  render: function() {
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Rndmr</div>
          <div className="panel-body">

            {this.state.randomNumber}
            
          </div>
        </div>
      </div>
      )
  }
});

var Addr = React.createClass({
  getInitialState: function(){
    return {
      sum: 0
    }
  },
  getSum: function(){
    var sum = this.props.clicks + 5;
    this.setState({
      sum: sum
    });
  },
  componentWillReceiveProps: function() {
    console.log('Addr received clicks');
    this.getSum();
  },
  render: function() {
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Addr</div>
          <div className="panel-body">

            {this.state.sum}
            
          </div>
        </div>
      </div>
      )
  }
});

var Multplr = React.createClass({
  getInitialState: function(){
    return {
      product: 0
    }
  },
  getProduct: function(){
    var product = this.props.clicks * 5;
    this.setState({
      product: product
    });
  },
  componentWillReceiveProps: function() {
    console.log('Multplr received clicks');
    this.getProduct();
  },
  render: function() {
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Multplr</div>
          <div className="panel-body">

            {this.state.product}
            
          </div>
        </div>
      </div>
      )
  }
});

var Imgr = React.createClass({
  getInitialState: function(){
    return {
      randomImageURL: ''
    }
  },
  componentWillReceiveProps: function(){
    console.log('Imgr received clicks');
    helpers.getRandomImage()
      .then(function(result){
        console.log(result.result);
        this.setState({
          randomImageURL: result.result
        })
      }.bind(this));
  },
  render: function(){
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Imgr</div>
          <div className="panel-body">

            <img src={this.state.randomImageURL} width="100%"/>
            
          </div>
        </div>
      </div>
      )
  }
});

module.exports = Parent;