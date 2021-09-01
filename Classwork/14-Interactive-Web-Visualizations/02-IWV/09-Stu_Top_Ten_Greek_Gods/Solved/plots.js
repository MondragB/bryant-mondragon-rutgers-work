console.log(data);
// Sort the data by Greek search results descending
let sortedGreekGods = data.sort((a,b) => {return b.greekSearchResults-a.greekSearchResults})

// Call the custom function with filter()


// Slice the first 10 objects for plotting
slicedSortedGreekGods = sortedGreekGods.slice(0,10)

// Reverse the array to accommodate Plotly's defaults
reversedSlicedSortedGreekGods = slicedSortedGreekGods.reverse()

// Trace for the Greek Data
let trace = {
    x: reversedSlicedSortedGreekGods.map(god => god.greekName),
    y: reversedSlicedSortedGreekGods.map(god => god.greekSearchResults),
    type: "bar"
};

// Data array
data = [trace]

// Apply a title to the layout
let layout = {
    title : 'Gods Bar Chart'
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout)