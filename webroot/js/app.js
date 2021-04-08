//Compile the result template
var source = $("#results-template").html();
const resultTemplate = Handlebars.compile(source);

var source = $("#summary-template").html();
const summaryTemplate = Handlebars.compile(source);

function isDefined(value) {
  return value !== undefined && value.length > 0;
};

Handlebars.registerHelper('isdefined', function(value) {
  return isDefined(value);
});

//Prevent form submit from refreshing the page, and submit the search
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  countrySearch();
});

function countrySearch() {
    search = $("#search-form input").val();
    
    //If user didn't enter a query, abort the search and display an error message
    if (search.length == 0) {
      showSearchError("Enter a query before searching","#search-form");
      return;
    }

    $.getJSON("api/index.php",{search:search}).done(function(data){
      responseBody = data;

      var country_count = 0;
      var regions = {};
      
      //Clear previous results
      $(".error-msg").remove();
      $("#search-results div").remove();
      $("#search-results").show();

      //Handle no results
      if (!data || !("countries" in data) || data["countries"].length < 1) {
        showSearchError("Search returned no results","#search-results");
        return;
      }

      for (var key in data["countries"]) {
        var country = data["countries"][key];
        
        country_count++;
        if (!isDefined(country.region)) {
          country.region = "Undefined";
        }
        incrementRegions(regions, country.region, country.subregion);
        country.population = country.population.toLocaleString();
        
        $("#search-results").append(resultTemplate(country));
      }

      $("#search-results").append(summaryTemplate({
        count: country_count,
        regions: regions
      }));

    });
    return;
}

function showSearchError(text, form){
  $("<div>").addClass("error-msg").text(text).appendTo(form);
}

function incrementRegions(regions, region, subregion) {
  if (!(region in regions)) {
    regions[region] = {
      "count": 1,
      "subregions": {}
    }
    if (isDefined(subregion)) {
      regions[region]["subregions"][subregion] = 1;
    }
  } else {
    regions[region]["count"]++;
    var subregions = regions[region]["subregions"];
    if (isDefined(subregion)){
      if (!(subregion in subregions)) {
        subregions[subregion] = 1;
      } else {
        subregions[subregion]++;
      }
    }
  }
}