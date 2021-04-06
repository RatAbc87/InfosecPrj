//Write your javascript here, or roll your own. It's up to you.
//Make your ajax call to http://localhost:8765/api/index.php here

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  countrySearch();
});

function countrySearch() {
    str = document.getElementById("search-field").value;
    if (str.length == 0) {
      document.getElementById("error-msg").innerHTML = "You must enter a query before searching";
      return;
    } 
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          $('#result-form').innerHTML = this.responseText;
          $('#result-form').show();
        }
      };

    xmlhttp.open("GET", "api/index.php?q=" + str, true);
    xmlhttp.send();
}