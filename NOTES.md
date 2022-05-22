# Brew On

## Overview

Application to keep track of favorite breweries an brew pubs by state. Will be able to rate breweries by it's beers and food, mark them as favorite, edit and delete. Will use Open Brewery DB -> https://www.openbrewerydb.org/ for discovering new breweries in the area.

## Features
Use clickable map from https://clickablemapmaker.com/ to determine the state
Display list of breweries in the area
Mark brewery as favorite
Edit/remove favorites

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




// breweryCard.innerHTML = `
// <ul class="collapsible popout" id="b${brewery.id}">
// <li>
//     <div class="collapsible-header card-panel teal lighten-2">
//         <i class="material-icons large">star</i>
//         <h5>${brewery.name}</h5>
//     </div>
//     <div class="collapsible-body">
//         <ul class="collection left-align" id='brewery-content'>
//             <li class="collection-item"><h6>Type: ${brewery.type}</h6></li>
//             <li class="collection-item"><h6>Adress: ${brewery.address}</h6></li>
//             <li class="collection-item"><h6>Website: <a href=${brewery.website}>${brewery.website}</a></h6></li>
//             <li class="collection-item"><h6>Food: ${brewery.food}</h6></li>
//             <li class="collection-item"><h6>Beer Rating: ${brewery.beer_rating}</h6></li>
//             <li class="collection-item"><h6>Pet Friendly? ${brewery.pet_friendly}</h6></li>
//             <li class="collection-item"><h6>Comments: ${brewery.comments}</h6></li>
//             <li class="collection-item right-align">
//                 <a class="waves-effect waves-light btn modal-trigger" data-target="edit${brewery.id}"><i class="material-icons left">edit</i>Edit</a>
//                 <a class="waves-effect waves-light btn modal-trigger" data-target="delete${brewery.id}" ><i class="material-icons left">delete</i>Remove</a>
//             </li>
//         </ul>
//     </div>
// </li>
// </ul>


$stateLink.addEventListener('click',e => {createTabs();statePage(e.target.parentNode.firstChild.innerHTML)});



    const createButton = (text, id, image) => {
    const btn = document.createElement('button');
    btn.className = "waves-effect waves-light btn";
    btn.innerText = text;
    const i = document.createElement('i');
    i.className = "material-icons left";
    i.id = id;
    i.innerText = image;
    btn.append(i);

    return btn;
}




blog post


-pit falls of  asynchronous code that modifies global state

temporal dependency

dataflow side efect free
display basado en resultado del flow

-global state

timneout 
promise modificaba objeto no conectado a la funcion de desplegar
arreglado

relying side effects de la funciones modificando shared state
en lugar de modelar flujo input output side effect free
-