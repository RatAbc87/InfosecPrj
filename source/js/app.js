var resultTemplate = Handlebars.templates.result;
var summaryTemplate = Handlebars.templates.summary;

//Define isDefined helper and register it with handlebars
function isDefined(value) {
  return value !== undefined && value.length > 0;
};

Handlebars.registerHelper('isDefined', function(value) {
  return isDefined(value);
});

//Define helper to pluralize a string if the count is something other than 1
Handlebars.registerHelper('pluralize', function(string, count) {
  return string + (count == 1 ? "" : "s");
});

//Define helper to format a number to the locale
Handlebars.registerHelper('formatNumber',function(number) {
  return number.toLocaleString();
});

//Prevent form submit from refreshing the page, and submit the search
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  countrySearch();
});

$("#search-button").click(function(){
  countrySearch();
});

function countrySearch() {
    var search = $("#search_query").val();
    var search_type = $("#search_type").val();
    
    //If user didn't enter a query, abort the search and display an error message
    if (search.length == 0) {
      showSearchError("You must enter a query before searching");
      return;
    }

    if (search_type.toLowerCase() === "alpha" && (search.length < 2 || search.length > 3)) {
      showSearchError("You must enter 2 or 3 characters for an alpha code search");
      return;
    }

    var searchParams = {
      search: search,
      search_type: search_type
    }

    $.getJSON("api/index.php",searchParams).done(function(data){
      responseBody = data;

      var country_count = 0;
      var regions = {};
      
      //Clear previous results
      $("#error-msg").hide();
      $("#search-results-content div").remove();
      $("#search-results").show();

      //Handle no results
      if (!data || data.length < 1) {
        showSearchError("Search returned no results");
        return;
      }

      //Process each country result
      for (var key in data) {
        var country = data[key];
        
        //Count the number of results
        country_count++; 

        //If no region is specified, explicitly set to "Undefined"
        if (!isDefined(country.region)) {
          country.region = "Undefined";
        }
        
        //Track the number of regions and their sub-regions
        incrementRegions(regions, country.region, country.subregion);
        
        //Append the formatted results to the search page
        $("#search-results-content").append(resultTemplate(country));
      }
      
      //Append the summary to the end of the search page
      $("#search-results-content").append(summaryTemplate({
        count: country_count,
        regions: regions
      }));

    });
}

//Update the error text and display the error field
function showSearchError(text){
  $("#error-msg-text").text(text);
  $("#error-msg").show();
}

//Count the regions and their subregions
function incrementRegions(regions, region, subregion) {
  //If the region doesn't already exist in the object
  if (!(region in regions)) {
    //Create a new object and instatiate a subregions object
    regions[region] = {
      "count": 1,
      "subregions": {}
    }
    
    //If there is no subregion (ex. polar region) then don't record anything
    if (isDefined(subregion)) {
      regions[region]["subregions"][subregion] = 1;
    }
  } else {
    //Region already exists, just increment the count
    regions[region]["count"]++;
    
    //Only update the subregion if one is provided
    var subregions = regions[region]["subregions"];
    if (isDefined(subregion)){
      //Explicitly set to 1 if it hasn't already been added
      if (!(subregion in subregions)) {
        subregions[subregion] = 1;
      } else {
        //Otherwise increment it
        subregions[subregion]++;
      }
    }
  }
}

//When the user clicks the search function dropdown, disable normal anchor behavior
//and update the dropdown and hidden input with the user's selection
$(document).ready(function(e){
  $('.search-panel .dropdown-menu').find('a').click(function(e) {
      e.preventDefault();
      var param = $(this).attr("href").replace("#","");
      var concept = $(this).text();
      $('.search-panel span#search_concept').text(concept);
      $('.input-group #search_type').val(param);
  });
  
  //Prevent previously selected search type from bleeding over after a refresh
  $('.search-panel .dropdown-menu').find('#default-search').click();
});