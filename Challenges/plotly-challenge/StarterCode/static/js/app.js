samples = '/Challenges/plotly-challenge/StarterCode/samples.json'

d3.json(samples).then(data => {

  let sampleValues = data.samples[0].sample_values;
  console.log(sampleValues);

  let ids = data.samples[0].otu_ids;
  console.log(ids);

  let id_names = ids.slice(0,10).map(name=>`OTU ${name}`).reverse();
  console.log(id_names);

  let labels = data.samples[0].otu_labels;
  console.log(labels);

  // Trace for the belly button Data
  let trace = {
    x: sampleValues.slice(0,10).reverse(),
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
});

