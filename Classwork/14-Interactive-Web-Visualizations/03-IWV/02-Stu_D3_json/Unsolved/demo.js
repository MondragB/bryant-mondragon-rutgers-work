// Get the Roadster endpoint
const url = "https://api.spacexdata.com/v3/roadster";

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
    console.log(data);
})

// Get the capsules endpoint
const url2 = "https://api.spacexdata.com/v3/capsules";

// Fetch the JSON data and console log it
d3.json(url2).then(function (data) {
    console.log(data);
})