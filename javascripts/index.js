

/* Global Variables */



/* Node Getters */

const mainDiv = () => document.getElementById('main');
const mapLink = () => document.getElementById('map-link');


/* Event Listeners */
const mapLinkClickEvent = () => {
     mapLink().addEventListener('click', loadMap)
}


/* Event Handlers */
const loadMap = () => {
    resetMainDiv();

    const where = document.createElement('h3');
    where.innerText = "Where to Brew?"

    const map = document.createElement('object');
    map.id = "map"
    map.type= "text/html";
    map.data="map.html";
    map.width="800px";
    map.height="600px";

    const m = document.getElementById('map')

    mainDiv().append(where, map);


    // <h3>Where to Brew?</h1>
    // <object type="text/html" data="map.html" width="800px" height="600px"></object>
}



/* MISC */
const resetMainDiv = () => {
    mainDiv().innerHTML = '';
}




/* Startup */

document.addEventListener('DOMContentLoaded', () => {
    loadMap();
    mapLinkClickEvent();
})



