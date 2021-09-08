// Create a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
// ?access_token={accessToken}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

// Add code to create a marker for each of the following cities and to add it to the map.
// newyork;
let nyMarker = L.marker([40.71, -74.00], {
  draggable: true,
  title: "New York"
}).addTo(myMap).bindPopup('12314');
// chicago;
let chcMarker = L.marker([41.87, -87.62], {
  draggable: true,
  title: "Chicago"
}).addTo(myMap);
// houston;
let Hmarker = L.marker([29.76, -95.36], {
  draggable: true,
  title: "Houston"
}).addTo(myMap);
// la;
let LaMarker = L.marker([34.05, -118.24], {
  draggable: true,
  title: "LA"
}).addTo(myMap);
// omaha;
let Omarker = L.marker([41.25, -95.93], {
  draggable: true,
  title: "Omaha"
}).addTo(myMap);