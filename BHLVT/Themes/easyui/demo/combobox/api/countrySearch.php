<?php

require_once("countries.php");



$phrase = "";

if(isset($_GET['phrase'])) {
	$phrase = $_GET['phrase'];
}
$countries = getCountries();

$dataType = "json";

if(isset($_GET['dataType'])) {
	$dataType = $_GET['dataType'];
}

$found_countries = array();

foreach ($countries as $key => $country) {

	if ($phrase == "" || stristr($country, $phrase) != false) {
		array_push($found_countries	, $country);
	}
}


switch($dataType) {

	case "json":

		$json = '[';

		foreach($found_countries as $key => $country) {
			$json .= '{"name": "' . $country . '"}';

			if ($country !== end($found_countries)) {
				$json .= ',';	
			}
		}

		$json .= ']';


		header('Content-Type: application/json');
		echo $json;

	break;

	case "xml":
 	    $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
		$xml .= '<data>';

		foreach($found_countries as $key => $country) {
			$xml .= '<country>' . $country . '</country>';
		}

		$xml .= '</data>';


		header('Content-Type: text/xml');
		echo $xml;
	break;

	default:
	break;

}


?>
