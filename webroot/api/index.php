<?php

$server_response = array();
$countries = array();
$region_counts = array();
$subrecion_counts = array();

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
        incrementCount($region_counts, $this->region);
        
        $this->subregion = $country->{'subregion'};
        incrementCount($subrecion_counts, $this->subregion);
        
        $this->population = $country->{'population'};
        $this->language = array();
        foreach ($country->{'languages'} as $language) {
            array_push($this->language, $language->{'name'});
        }
    }
}

function populationSort($a, $b) {
    if ($a->population == $b->population) {
        return 0;
    }
    return ($a->population < $b->population) ? -1 : 1;
}

function incrementCount($array, $key) {
    $array[$key] = $array[$key] + 1;
}

//Get the query
$q = $_REQUEST["q"];

//Perform search if we have a query value
if ($q !== "") {
    $response = file_get_contents("https://restcountries.eu/rest/v2/name/{$q}");

    if ($response == false) {
        $results = "An error occurred";
    } else {
        $results = json_decode($response);
        foreach ($results as $country) {
            $new_country = new Country;
            $new_country->setCountry($country);
            array_push($countries, $new_country);
        }
        $countries.uasort($countries, 'populationSort');
    }
}

$server_response['countries'] = $countries;
$server_response['regions'] = $region_counts;
$server_response['subregions'] = $subrecion_counts;

// JSON encode and echo search results
header('Content-Type: application/json');
echo json_encode($server_response);



?> 

