// Create a map object.
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "Brazil",
    location: [-14.2350, -51.9253],
    points: 227
  },
  {
    name: "Germany",
    location: [51.1657, 10.4515],
    points: 218
  },
  {
    name: "Italy",
    location: [41.8719, 12.5675],
    points: 156
  },
  {
    name: "Argentina",
    location: [-38.4161, -63.6167],
    points: 140
  },
  {
    name: "Spain",
    location: [40.4637, -3.7492],
    points: 99
  },
  {
    name: "England",
    location: [52.355, 1.1743],
    points: 98
  },
  {
    name: "France",
    location: [46.2276, 2.2137],
    points: 96
  },
  {
    name: "Netherlands",
    location: [52.1326, 5.2913],
    points: 93
  },
  {
    name: "Uruguay",
    location: [-32.4228, -55.7658],
    points: 72
  },
  {
    name: "Sweden",
    location: [60.1282, 18.6435],
    points: 61
  }
];

function markerSize(points) {
  return points * 3000;
}



// Loop through the countries array.
for (let i = 0; i < countries.length; i++) {
  // Conditionals for country points
  if (countries[i].points > 200){
    L.circle(countries[i].location, {
      fillOpacity: .75,
      color: 'yellow',
      radius: markerSize(countries[i].points)
    }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>Points: ${countries[i].points.toLocaleString()}</h3>`).addTo(myMap);
  } else if (countries[i].points > 100) {
    L.circle(countries[i].location, {
      fillOpacity: .75,
      color: 'blue',
      radius: markerSize(countries[i].points)
    }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>Points: ${countries[i].points.toLocaleString()}</h3>`).addTo(myMap);
  } else if (countries[i].points > 90) {
    L.circle(countries[i].location, {
      fillOpacity: .75,
      color: 'green',
      radius: markerSize(countries[i].points)
    }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>Points: ${countries[i].points.toLocaleString()}</h3>`).addTo(myMap);
  } else {
    L.circle(countries[i].location, {
      fillOpacity: .75,
      color: 'red',
      radius: markerSize(countries[i].points)
    }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>Points: ${countries[i].points.toLocaleString()}</h3>`).addTo(myMap);
  }
}
