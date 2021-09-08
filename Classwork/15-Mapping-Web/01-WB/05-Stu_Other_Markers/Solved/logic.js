// Create our initial map object.
// Set the longitude, latitude, and starting zoom level/
let myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map.
// Use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Create a red circle over Dallas.
L.circle([32.77, -96.80], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 1,
    radius: 500
}).addTo(myMap);

// Connect a black line from NYC to Toronto.
L.polyline([
    [40.71, -74.00],
    [43.65, -79.38]
], {
    color: "black"
}).addTo(myMap);

// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville, and Montgomery.
L.polygon([
    [33.74, -84.38],
    [32.08, -81.09],
    [30.33, -81.65],
    [32.37, -86.30]
],{
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: .75,
}).addTo(myMap);
