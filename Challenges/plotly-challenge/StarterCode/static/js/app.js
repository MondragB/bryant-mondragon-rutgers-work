samples = '/Challenges/plotly-challenge/StarterCode/samples.json'

d3.json(samples).then(data => {

  // Bar chart data
  let sampleValues = data.samples[0].sample_values.slice(0,10).reverse();
  let ids = data.samples[0].otu_ids;
  let id_names = ids.slice(0,10).map(name=>`OTU ${name}`).reverse();
  let labels = data.samples[0].otu_labels;

  // Trace for the belly button Data
  let trace = {
    x: sampleValues,
    y: id_names,
    text: labels,
    type: 'bar',
    orientation: 'h'
  };

  // Data array
  let barTrace = [trace];

  // Apply a title to the layout
  let layout = {
    title: 'Top 10 OTUs'
  };

  // Render the plot to the div tag with id "bar"
  Plotly.newPlot('bar', barTrace, layout);

  // Bubble chart data
  let sampleValues = data.samples[0].sample_values;
  let ids = data.samples[0].otu_ids;
  let id_names = ids.slice(0,10).map(name=>`OTU ${name}`);
  let labels = data.samples[0].otu_labels;

  // Trace for the belly button Data
  let trace2 = {
    x: sampleValues,
    y: id_names,
    text: labels,
    type: 'bubble',
    orientation: 'h'
  };

  // Data array
  let bubbleTrace = [trace2];

  // Apply a title to the layout
  let layout = {
    title: 'Top 10 OTUs'
  };

  // Render the plot to the div tag with id "bar"
  Plotly.newPlot('bar', bubbleTrace, layout);
});

