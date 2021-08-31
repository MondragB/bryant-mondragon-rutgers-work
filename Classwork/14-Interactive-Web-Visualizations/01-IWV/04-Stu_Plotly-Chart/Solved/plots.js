// Copy over the variables from the previous activity
let name = "Bryant M."
let title = `${name}'s First Plotly Chart`
let books = ['Hamlet', 'Ender\'s Game', 'Halo', 'Shadows Rising', 'The Giver', 'Marshalls']
let timesRead = ['1', '2', '3', '4', '5', '6']

// Assign `x` and `y` values for the Plotly trace object
let trace1 = {
  x: books,
  y: timesRead,
  type: 'bar'
};

// Leave the code below unchanged
let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("plot", data, layout);