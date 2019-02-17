A weather app using Apixu weather API and google maps (so far) to show the user the weather in the submitted location in both celcius and farenheit. 

<h1>Getting started</h1>
clone this repository </br>
obtain an api key from https://www.apixu.com/ </br> 
(optional) obtain an api key for google maps using https://developers.google.com/maps/documentation/javascript/get-api-key </br>
(without the above, the google maps will launch in developer mode) </br>
either: </br>
- create a .env file in the root directory and assign your API keys to variables REACT_APP_WEATHER_APIKEY and REACT_APP_GOOGLEMAPS_APIKEY </br>
- replace the process.env variables in src/containers/app.js and src/containers/GoogleMap/GoogleMap.js with your api keys </br>
(NOTE: if you didnt get the google maps API key, delete the lines where the API key is set) </br>
run npm install </br>
run npm start </br>
