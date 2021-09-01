console.log(data);

// Trace for the Greek Data
greekGodNames = data.map(god => god.greekName);
greekGodResults = data.map(god=> god.greekSearchResults);

// Data trace array
let trace = {
    x: greekGodNames,
    y: greekGodResults,
    type: "bar"
};
data = [trace]

// Apply the group barmode to the layout
let layout = {
    title : 'Gods Bar Chart'
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout)