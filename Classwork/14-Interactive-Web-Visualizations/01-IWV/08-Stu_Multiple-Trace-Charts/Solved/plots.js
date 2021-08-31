console.log(data);

// Initialized arrays
let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// YOUR CODE HERE
// For loop to populate arrays
for (let i = 0; i < data.length; i++) {
    currentGod = data[i]

    names.push(currentGod.pair)

    greekNames.push(currentGod.greekName)
    romanNames.push(currentGod.romanName)
    
    greekSearchResults.push(currentGod.greekSearchResults)
    romanSearchResults.push(currentGod.romanSearchResults)
}

// Trace1 for the Greek Data
let trace1 = {
    x: names,
    y: greekSearchResults,
    text: greekNames,
    name: 'greek',
    type: "bar"
}   

// Trace 2 for the Roman Data
let trace2 = {
    x: names,
    y: romanSearchResults,
    text: romanNames,
    name: 'roman',
    type: "bar"
}   
// Create data array
data = [trace1, trace2]

// Apply a title to the layout
let title = 'Gods Bar Chart'

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data)