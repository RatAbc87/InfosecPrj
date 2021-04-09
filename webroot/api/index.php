<?php

//Defining a class to represent a single country in the response
class Country
{
    public string $name;
    public string $alpha2;
    public string $alpha3;
    public string $flag;
    public string $region;
    public string $subregion;
    public int $population;
    public array $languages;

    public function setCountry($country) {
        global $region_counts, $subrecion_counts;
        
        $this->name = $country->{'name'};
        $this->alpha2 = $country->{'alpha2Code'};
        $this->alpha3 = $country->{'alpha3Code'};
        $this->flag = $country->{'flag'};
        $this->region = $country->{'region'};
        $this->subregion = $country->{'subregion'};
        $this->population = $country->{'population'};
        
        $this->language = array();
        foreach ($country->{'languages'} as $language) {
            array_push($this->language, $language->{'name'});
        }
    }

    //Sort function for descending population
    static function populationSort($a, $b) {
        if ($a->population == $b->population) {
            return 0;
        }
        return ($a->population > $b->population) ? -1 : 1;
    }
}

//Get the query
$query = $_REQUEST["search"];
$search_type = $_REQUEST["search_type"];

//Perform search if we have a query value
if ($query !== "") {

    if (str_contains($search_type, "name")) {
        $api = "name";
    } else if ($search_type == "alpha") {
        $api = $search_type;
    } else {
        //Invalid value, echo back nothing
        header('Content-Type: application/json');
        echo json_encode();
    }

    $response = file_get_contents("https://restcountries.eu/rest/v2/{$api}/{$query}");

    if ($response !== false) {
        //No error, decode response and define the country array
        $results = json_decode($response);
        $countries = array();

        if ($api != "alpha") { //Alpha search returns a single matching country
            //For each response, populate a representative object and add it to the array
            foreach ($results as $country) {
                //For full name search, only return matching countries
                if ($search_type == "fullname" && strcasecmp($query, $country->{'name'})) {
                    continue;
                }

                $new_country = new Country;
                $new_country->setCountry($country);
                array_push($countries, $new_country);
            }
            
            //Sort the countries in order of declining population and add it to the response
            $countries.usort($countries, array('Country','populationSort'));
        } else {
            $new_country = new Country;
            $new_country->setCountry($results);
            array_push($countries, $new_country);
        }

        $server_response['countries'] = $countries;
        
    }
}

// JSON encode and return the search results
header('Content-Type: application/json');
echo json_encode($server_response);
?> 

