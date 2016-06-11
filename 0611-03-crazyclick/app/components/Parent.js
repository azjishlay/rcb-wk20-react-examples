var React = require('react');
var ReactDOM = require('react-dom');
var helpers = require('../utils/helpers');


var Parent = React.createClass({
  getInitialState: function(){
    return {
      image: '',
      count: 99999,
      addrCount: 0,
      multplrCount: 0,
    }
  },
  handleClick: function(){
    console.log("You clicked a button on the parent!");
    this.setState({
      count: this.state.count + 1,
      addrCount: this.state.count + 5,
      multplrCount: this.state.count * 5
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
          <Rndmr rndmrCount={this.state.count} />
          <Addr addrCount={this.state.addrCount}/>
          <Multplr multplrCount={this.state.multplrCount} />
          <Imgr image={this.state.image}/>
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
    var randomNumber = Math.floor(Math.random() * this.props.rndmrCount);
    this.setState({
      randomNumber: randomNumber
    });
  },
  componentWillReceiveProps: function() {
    console.log('Rndmr received props');
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
  render: function() {
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Addr</div>
          <div className="panel-body">

            {this.props.addrCount}
            
          </div>
        </div>
      </div>
      )
  }
});

var Multplr = React.createClass({
  render: function() {
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Multplr</div>
          <div className="panel-body">

            {this.props.multplrCount}
            
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
    console.log('Imgr received props!');
    /*helpers.getRandomImage()
      .then(function(result){
        console.log(result.images);
        console.log(result.embed_url);
        this.setState({
          randomImageURL: ''
        })
      }.bind(this));*/
  },
  componentDidUpdate: function(prevState, nextState){
    console.log('Imgr mounted!');
  },
  render: function(){
    return(
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-heading">Imgr</div>
          <div className="panel-body">

            Some content here
            
          </div>
        </div>
      </div>
      )
  }
});

module.exports = Parent;