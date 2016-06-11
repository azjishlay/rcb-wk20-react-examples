var axios = require('axios');

var helpers = {
  getRandomImage: function(){
    var randomSearchTerm = "cats";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + randomSearchTerm + "&api_key=dc6zaTOxFJmzC";

    console.log(queryURL);

    return axios.get(queryURL)
      .then(function(result){
        console.log(result.data.data[0]);
        return {
          result: result.data.data[0]
        }
      })

  }
};

module.exports = helpers;