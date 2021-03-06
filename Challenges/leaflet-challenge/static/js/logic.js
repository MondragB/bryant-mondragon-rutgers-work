// Perform an API call to the Earthquake information. Call createMarkers when it completes.
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(createMarkers);

// Create the createMarkers function.
function createMarkers (response) {

    function size(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 2;
    }

    // Function to Determine Color of Marker Based on the Magnitude of the Earthquake
    function color(magnitude) {
        switch (true) {
        case magnitude > 10:
            return "#cd6155 ";
        case magnitude > 7:
            return "#f4d03f  ";
        case magnitude > 5:
            return "#239b56";
        case magnitude > 3:
            return "#a9cce3 ";
        case magnitude > 1:
            return "#ffffff";
        default:
            return "#DAF7A6";
        }
    }

    // Pull the "features" property from response.
    let earthquakes = response.features;
    // Initialize an array to hold the eq markers.
    let eqMarkers = [];
    // Loop through the earthquakes array.
    for (let i = 0; i < earthquakes.length; i++) {
        let earthquake = earthquakes[i];
        // For each location, create a marker, and bind a popup with the relevant information.
        let marker = L.circleMarker([earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]).bindPopup("<h4>Location: " + earthquake.properties.place + 
        "</h4><hr><p>Date & Time: " + new Date(earthquake.properties.time) + 
        "</p><hr><p>Magnitude: " + earthquake.properties.mag + "</p>");
        // Style of Marker Based on the Magnitude of the Earthquake
        marker.setStyle({
            opacity: 1,
            fillOpacity: 1,
            fillColor: color(earthquake.properties.mag),
            color: "#000000",
            radius: size(earthquake.properties.mag),
            stroke: true,
            weight: 0.5
        });
        // Add the marker to the eqMarkers array.
        eqMarkers.push(marker);
    }
    // Create a layer group that's made from the eqMarkers array, and pass it to the createMap function.
    createMap(L.layerGroup(eqMarkers));
    
}

// Create the createMap function. 
let createMap = function(eqLocations) {

    let plateLocations = new L.layerGroup();
    
    // Create the tile layer that will be the background of our map.
    let darkMap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    // Tile layer of grayscale of the map.
    let lightMap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    // Tile layer of Topographical map.
    let topoMap = L.tileLayer('https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={accessToken}', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> icontributors',
        id: "mapbox.outdoors",
        accessToken: API_KEY
    });
    // Create a baseMaps object to hold the lightmap layer.
    let baseMaps = {
        'Light Scale Map': lightMap,
        'Dark Scale Map': darkMap,
        'Topo Map': topoMap
    };
    // Create an overlayMaps object to hold the eqLocations layer.
    let overlayMaps = {
        'Earthquakes': eqLocations,
        'Tectonic Plates': plateLocations
    };
    // Create the map object with options.
    let myMap = L.map("map", {
        center: [0, 0],
        zoom: 2.4,
        layers: [lightMap, eqLocations]
    });
    // Loading in the tectonic plate data.
    d3.json('https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json', function(tectonicplates) {
        // Create a GeoJSON Layer the plateData
        L.geoJson(tectonicplates, {
            color: "yellow",
            weight: 2
        }).addTo(plateLocations)
        // Add tectonicPlates Layer to the Map
        plateLocations.addTo(myMap);
        console.log('somewhere')
    });

    // Set Up Legend
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend"), 
        magnitudeLevels = [0, 1, 2, 3, 4, 5];

        div.innerHTML += "<h3>Magnitude</h3>"
        return div;
    };
    // Add Legend to the Map
    legend.addTo(myMap);
    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}
