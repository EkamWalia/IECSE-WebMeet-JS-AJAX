// Ensure that the script is loaded after the DOM completes rendering
window.onload = function () {

    // Object for search button
    var searchButton = document.getElementById('search-button');

    // Add event listener to the submit button
    searchButton.addEventListener('click' , function() {

        // Concatenating Base url for  AJAx call to SWAPI
        // and the name of the character to search
        var baseURL = 'https://swapi.co/api/people/?search='

        // XML Http Request Object

        // Open a new http request

        // Write function to recieve the response returned by API

        // Send AJAX Request
    });

    // Display Results from the API call on html page
    function displayResults(response) {
      
      // Update the number of results found
      var resultsCount = document.getElementById('results-count');
      resultsCount.innerHTML = response.count + " result(s) found";

      // Add the names fo all charcters to list
      var resultsList = document.getElementById('results-list')
      resultsList.innerHTML = "";
      response.results.forEach(function(result) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(result.name));
        resultsList.appendChild(li);
      });
    }
};
