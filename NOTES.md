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
3. Add favorite brewery
4. Add rating to breweries
5. Add delete to breweries

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





