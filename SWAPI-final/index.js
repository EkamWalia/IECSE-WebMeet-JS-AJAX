// Ensure that the script is loaded after the DOM completes rendering
window.onload = function () {

    // Object for search button
    var searchButton = document.getElementById('search-button');

    // Add event listener to the submit button
    searchButton.addEventListener('click' , function() {

        // Concatenating Base url for  AJAx call to SWAPI
        // and the name of the character to search
        var baseURL = 'https://swapi.co/api/people/?search='
        var charName = document.getElementById('char-name').value;
        var url = baseURL + charName;

        // XML Http Request Object
        var http = new XMLHttpRequest();

        // Open a new http request
        http.open("GET" , url, true);

        // Write function to recieve the response returned by API
        http.onload = function(){

            if(http.status === 200) {
              // Parsing the response from AJAX call as a JSON object
              var response = JSON.parse(http.response);
              // Call the displayResults function to
              displayResults(response);
            }
            else {
              var searchResults = document.getElementById('search-results');;
              searchResults.innerHTML = "Find quote"
            }
        };

        http.send();
    });

    // Display Results from the API call on html page
    function displayResults(response) {

      // Update the number of results found
      var resultsCount = document.getElementById('results-count');
      resultsCount.innerHTML = response.count + " result(s) found";

      // Add the names fo all charcters to list
      var resultsList = document.getElementById('results-list')

      response.results.forEach(function(result) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(result.name));
        resultsList.appendChild(li);
      });

      
    }

};
