var axios = require('axios');

var helpers = {
  getRandomImage: function(){
    var randomSearchTerm = "cats";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + randomSearchTerm + "&api_key=dc6zaTOxFJmzC";
    console.log(queryURL);

    var n = Math.floor(Math.random() * 20);
    console.log(n);

    return axios.get(queryURL)
      .then(function(result){
        return {
          result: result.data.data[n].images.fixed_height.url
        }
      })

  }
};

module.exports = helpers;