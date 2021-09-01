console.log(data);

// Create a custom function to return Roman gods with more than 1 million search results
function millionOrMore(data) {
    return data.romanSearchResults > 1000000;
}

// Call the custom function with filter()
let romanFilter = data.filter(millionOrMore);

// Trace for the Roman Data
romanGodNames = romanFilter.map(god => god.romanName);
romanGodResults = romanFilter.map(god=> god.romanSearchResults);

// Data trace array
let trace = {
    x: romanGodNames,
    y: romanGodResults,
    type: "bar"
};
data = [trace]

// Apply title to the layout
let layout = {
    title : 'Gods Bar Chart'
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout)