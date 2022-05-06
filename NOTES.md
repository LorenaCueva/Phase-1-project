# Brew On

## Overview

Application to keep track of favorite breweries an brew pubs by state. Will be able to rate breweries by it's beers and food, mark them as favorite, edit and delete. Will use Open Brewery DB -> https://www.openbrewerydb.org/ for discovering new breweries in the area.

## Features
Use clickable map from https://clickablemapmaker.com/ to determine the state
Display list of favorites in the area
Edit/remove favorites
Add a new favorite brewery

## To do
1. Nav bar
2. Map get to state
3. Search Breweries
4. Add favorite brewery
5. Add rating to breweries
6. Add delete to breweries
7. Add edit to breweries
8. Add new Brewery
 
## MVP
1. Search Breweries
2. Add favorite Breweries
3. Rate Brewery
4. Delete Brewery
5. Edit Brewery

## Streach
1. Add new Brewery
2. Breweries close by








$stateLink.addEventListener('click',function(e){console.log(stateId)})

addEventListener('mouseover',function(e){stateOn.call(self,stateId)});$stateLink.addEventListener('mouseout',function(e){stateOff.call(self,stateId)});$stateLink.addEventListener('click',function(e){console.log(stateId)});$stateLink=null}.call(this,stateId))}global.



Using 


Materialize for CSS


Pull main info from Open Brewery DB

https://api.openbrewerydb.org/breweries?by_state=washington

Discover new breweries


Keep local record for food and beer rating 
    Can edit
    Choose with image



Favorites -> list

I googled and found out that this is the way to get current location. I just need to set the starting address to Current+Location. I don't need Longitude and Latitude, and that's what I wanted.

https://maps.google.com?saddr=Current+Location&daddr=43.12345,-76.12345



GEOLOCATION

 var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);


          // "AL":[],
//     "AK":[],
//     "AZ":[],
//     "AR":[],
//     "CA":[],
//     "CO":[],
//     "CT":[],
//     "DE":[],
//     "FL":[],
//     "GA":[],
//     "HI":[],
//     "ID":[],
//     "IL":[],
//     "IN":[],
//     "IA":[],
//     "KS":[],
//     "KY":[],
//     "LA":[],
//     "ME":[],
//     "MD":[],
//     "MA":[],
//     "MI":[],
//     "MN":[],
//     "MS":[],
//     "MO":[],
//     "MT":[],
//     "NE":[],
//     "NV":[],
//     "NH":[],
//     "NJ":[],
//     "NM":[],
//     "NY":[],
//     "NC":[],
//     "ND":[],
//     "OH":[],
//     "OK":[],
//     "OR":[],
//     "PA":[],
//     "RI":[],
//     "SC":[],
//     "SD":[],
//     "TN":[],
//     "TX":[],
//     "UT":[],
//     "VT":[],
//     "VA":[],
//     "WA":[],
//     "WV":[],
//     "WI":[],
//     "WY":[],

//    const coll = document.createElement('div');
//    coll.innerHTML =   `<ul class="collapsible">
//    <li>
//      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
//      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
//    </li>
//    <li>
//      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
//      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
//    </li>
//    <li>
//      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
//      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
//    </li>
//  </ul>`


    // var elems = document.querySelectorAll('.collapsible');
    // M.Collapsible.init(elems);